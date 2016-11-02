#include<bits/stdc++.h>
#include<gmpxx.h>
using namespace std;

struct point
{
	mpz_t x;
	mpz_t y;
};

void pointadd(mpz_t x1,mpz_t y1,mpz_t x2,mpz_t y2,mpz_t p)
{
	point a;
	mpz_t sub1,sub2,i1,k,k2;
	mpz_inits(sub1,sub2,k,k2,i1,NULL);
	mpz_sub (sub1,x2,x1);
	mpz_invert (i1,sub1,p);
	//cout<<"inverse:"<<i1<<endl;
	mpz_sub(sub2,y2,y1);
	mpz_mul(k,sub2,i1);
	mpz_mul(k2,k,k);
        mpz_sub(k2,k2,x1);
	mpz_sub(k2,k2,x2);	
	mpz_mod(k2,k2,p);
	//cout<<k2<<endl;//x3
	mpz_sub(sub1,x1,k2);
	mpz_mul(sub1,sub1,k);
	mpz_sub(sub1,sub1,y1);
	mpz_mod(sub1,sub1,p);
	//cout<<sub1<<endl;//y3
	cout<<"(x3,y3) "<<"("<<k2<<","<<sub1<<")"<<endl;

}
void pointdoub(mpz_t x1,mpz_t y1,mpz_t p,mpz_t a)
{
	mpz_t sub1,sub2,i1,k,k2,var;
	mpz_inits(sub1,sub2,k,k2,i1,NULL);
	mpz_mul(k,x1,x1);
        mpz_set_ui(var,3);
	mpz_mul(k,k,var);
	mpz_add(k,k,a);
	mpz_set_ui(var,2);
	mpz_mul(k2,var,y1);
	mpz_invert(i1,k2,p);
	mpz_mul(k2,i1,k);
	mpz_mul(k2,k2,k2);
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
	cout<<"2(x1,y1) "<<"("<<k2<<","<<sub1<<")"<<endl;
}

void l_to_r(mpz_t X,mpz_t Y,mpz_t k)
{
	
}

	
int main()
{
	int num;
	point pp;
	mpz_set_ui(pp.x,0);
	cout<<pp.x;
	mpz_t a,b,p,x1,x2,y1,y2,x3,y3;
 	mpz_inits(a,b,p,x1,x2,y1,y2,x3,y3,NULL);
 	cout<<"enter p"<<endl; 
	cin>>p;
	cout<<"enter a"<<endl; 
	cin>>a;
	cout<<"enter b"<<endl; 
	cin>>b;
	cout<<"no of times"<<endl;
	cin>>num;
for(int i=0;i<num;i++)
       {cout<<"enter x1,y1,x2,y2 "<<endl; 
	cin>>x1>>y1>>x2>>y2;
 	pointdoub(x1,y1,p,a);}
	cout<<pp.x<<" "<<pp.y<<endl;

	/*int X,Y,k;
 	cout<<"enter x,y and k of point,k is no of times point (x,y) is to be multiplied"<<endl;
	cin>>X>>Y>>k;
        l_to_r(X,Y,k);*/
	return 0;	
}
