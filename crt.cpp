#include<bits/stdc++.h>
#include<gmp.h>
using namespace std;
void getM(mpz_t M,mpz_t m[],int noe)
{
	mpz_set_ui(M,1);
	for(int i=0;i<noe;i++)
	{
		mpz_mul(M,M,m[i]);
	}
}
int main()
{
	int noe;
	cout<<"enter no of equations : ";
	cin>>noe;
	mpz_t a[noe];
	mpz_t m[noe];
	mpz_t mi[noe];
	mpz_t ci[noe];
	mpz_t x;
	for(int i=0;i<noe;i++)
	{
		mpz_inits(a[i],m[i],mi[i],ci[i],NULL);
	}
	mpz_inits(x,NULL);
	cout<<"a[i]-remainders and m[i]-divisors"<<endl;
	for(int i=0;i<noe;i++)
	{
		cout<<"enter a["<<i+1<<"]and m["<<i+1<<"]\n";
		cin>>a[i]>>m[i];
	}
	mpz_t M;
	mpz_inits(M,NULL);
	getM(M,m,noe);
	//cout<<M<<"\n";
	mpz_set_ui(x,0);
	for(int i=0;i<noe;i++)
	{
		mpz_divexact(ci[i],M,m[i]);
		mpz_invert(mi[i],ci[i],m[i]);
		cout<<"inverse of "<<ci[i]<<"is : " <<mi[i]<<"\n";
		mpz_mul(ci[i],mi[i],ci[i]);
		mpz_mul(ci[i],ci[i],a[i]);
		mpz_add(x,x,ci[i]);
	}
        
	mpz_mod(x,x,M);
	cout<<x<<"\n";
	for(int i=0;i<noe;i++)
	{
		mpz_t t;
		mpz_inits(t,NULL);
		mpz_set(t,x);
		mpz_mod(t,x,m[i]);
		cout<<x<<" mod "<<m[i]<<"is :"<<t<<"\n";
	}	
}
