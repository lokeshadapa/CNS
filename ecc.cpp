//point adddition, point doubling, scalar mutiplication in ecc...

#include<bits/stdc++.h>
#include<gmpxx.h>
#include<string.h>
#include<math.h>
using namespace std;

struct point
{
	mpz_t x;
	mpz_t y;
};

point pointadd(mpz_t x1,mpz_t y1,mpz_t x2,mpz_t y2,mpz_t p)
{
	point e;
	mpz_inits(e.x,e.y,NULL);
	mpz_t sub1,sub2,i1,k,k2;
	mpz_inits(sub1,sub2,k,k2,i1,NULL);
	mpz_sub (sub1,x2,x1);
	mpz_invert (i1,sub1,p);
	//cout<<"inverse:"<<i1<<endl; 
	mpz_sub(sub2,y2,y1);
	//cout<<sub2<<endl;
	mpz_mul(k,sub2,i1);
	//cout<<k<<endl;
	mpz_mul(k2,k,k);
	//cout<<k2<<endl;
        mpz_sub(k2,k2,x1);
	mpz_sub(k2,k2,x2);	
	mpz_mod(k2,k2,p);
	//cout<<k2<<endl;//x3
	mpz_sub(sub1,x1,k2);
	mpz_mul(sub1,sub1,k);
	mpz_sub(sub1,sub1,y1);
	mpz_mod(sub1,sub1,p);
	cout<<sub1<<endl;//y3
	cout<<"(x3,y3) "<<"("<<k2<<","<<sub1<<")"<<endl;
	mpz_set(e.x,k2); mpz_set(e.y,sub1);
	return e;

}
point pointdoub(mpz_t x1,mpz_t y1,mpz_t p,mpz_t a)
{
	//cout<<"yi"<<endl;
	point f;
	mpz_t sub1,sub2,i1,k,k2,var;
	mpz_inits(sub1,sub2,k,k2,i1,var,f.x,f.y,NULL);
	mpz_mul(k,x1,x1);
	//cout<<"yi"<<endl;
	cout<<k<<endl;
    mpz_set_ui(var,3);
	mpz_mul(k,k,var);
	cout<<k<<endl;
	//cout<<"yi"<<endl;
	mpz_add(k,k,a);
	mpz_set_ui(var,2);
	mpz_mul(k2,var,y1);
	//cout<<"yi"<<endl;
	mpz_invert(i1,k2,p);
	//cout<<"yi"<<endl;
	mpz_mul(k2,i1,k);
	mpz_mul(k2,k2,k2);
	//cout<<"yi"<<endl;
	mpz_mul(k,var,x1);
	mpz_sub(k2,k2,k);
	mpz_mod(k2,k2,p);
	//cout<<k2<<endl;//x3
	mpz_mul(k,x1,x1);
        mpz_set_ui(var,3);
	mpz_mul(k,k,var);
	mpz_add(k,k,a);
	mpz_set_ui(var,2);
	mpz_mul(sub2,var,y1);
	mpz_invert(i1,sub2,p);
	mpz_mul(sub2,i1,k);
	mpz_sub(sub1,x1,k2);
	mpz_mul(sub1,sub1,sub2);
	mpz_sub(sub1,sub1,y1);
	mpz_mod(sub1,sub1,p);
	//cout<<sub1<<endl;//y3
	//cout<<"2(x1,y1) "<<"("<<k2<<","<<sub1<<")"<<endl;
	mpz_set(f.x,k2); mpz_set(f.y,sub1);
	return f;
}

point l_to_r(mpz_t X,mpz_t Y,string k,mpz_t p,mpz_t a,mpz_t b)
{
	point g,h;
	mpz_inits(g.x,g.y,h.x,h.y,NULL);
	mpz_set(g.x,X); mpz_set(g.y,Y);
	bitset<64> mul (k);
	//cout<<mul<<endl;
	int flag=0,pos;
	for(int i=0;i<64&&i<k.length();i++)
	{
		cout<<"hi"<<endl;
		if(flag!=0)
		{
			cout<<g.x<<" "<<g.y<<p<<a<<endl;
					g=pointdoub(g.x,g.y,p,a);
			if(mul[i]==1)
				{
					//cout<<"hee"<<endl;
					cout<<g.x<<" "<<g.y<<endl;
					h=pointadd(g.x,g.y,h.x,h.y,p);
					
			    }
		}
		else
		{
			if(mul[i]==1)
			{
				flag=1;
				if(i!=0)
				{for(int j=0;j<=i-1;j++)
				{g=pointdoub(g.x,g.y,p,a);
					//cout<<"hihih"<<endl;
				}}
				h=g;
				//cout<<g.x<<" "<<g.y<<endl;
			}
		}
	}
	return h;

}

point r_to_l(mpz_t X,mpz_t Y,string l,mpz_t p,mpz_t a,mpz_t b)
{
	bitset<64> m (l);
	point g,h;
	mpz_inits(g.x,g.y,h.x,h.y,NULL);
	mpz_set(g.x,X); mpz_set(g.y,Y);
	h=g;
	for(int i=(l.length()-2);i>=0;i--)
	{
		h=pointdoub(h.x,h.y,p,a);
		if(m[i]==1){h=pointadd(g.x,g.y,h.x,h.y,p);}
	}
	return h;
}
	
int main()
{
	int num;
	point pp;
	mpz_t a,b,p;
 	mpz_inits(a,b,p,pp.x,pp.y,NULL);
 	cout<<"no of times"<<endl;
	cin>>num;
 	cout<<"enter p"<<endl; 
	cin>>p;
	cout<<"enter a"<<endl; 
	cin>>a;
	cout<<"enter b"<<endl; 
	cin>>b;

	string k;
	mpz_t X,Y;
	mpz_inits(X,Y,NULL);
        //cout<<"hi"<<endl;
	mpz_set_ui(X,5); mpz_set_ui(Y,1);
 	for(int i=0;i<num;i++)
 	{
 	cout<<"enter x,y and k of point,k is no of times point (x,y) is to be multiplied"<<endl;
	cin>>k;
	//cout<<k.length()<<endl;
	//pp=pointdoub(X,Y,p,a);
	//cout<<pp.x<<" "<<pp.y<<endl;
    pp=l_to_r(X,Y,k,p,a,b);
    cout<<pp.x<<" "<<pp.y<<endl;
    //pp=r_to_l(X,Y,k,p,a,b);
    //cout<<pp.x<<" "<<pp.y<<endl;
 	}
	return 0;	
}
