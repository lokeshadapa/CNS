#include<bits/stdc++.h>
#include<gmp.h>
using namespace std;

void encryption(mpz_t C,mpz_t M,mpz_t e,mpz_t n)
{
	//C= pow(M,e);
	//C %= n;
	mpz_powm(C,M,e,n);
}
void decryption(mpz_t M,mpz_t C,mpz_t d,mpz_t n)
{
	//M = pow(C,d);
	//M %=n;
	mpz_powm(M,C,d,n);
}
int main()
{
	mpz_t cp,p,cq,q,n,pi_n,de,e,d;
	mpz_inits(p,cp,cq,q,n,pi_n,de,e,d,NULL);
	int bit =10;
	gmp_randstate_t state;
	gmp_randinit_default(state);
        //selecting large prime p and q
	mpz_urandomb(cp,state,256);
	mpz_urandomb(cq,state,256);
	mpz_nextprime(p,cp);
	mpz_nextprime(q,cq);
	mpz_mul(n,p,q);
	cout<<"p is	"<<p<<"\nq is	"<<q<<"\nn is	"<<n<<"\n";
        //pi_n=(p-1)(q-1)
	mpz_sub_ui(cp,p,1);
	mpz_sub_ui(cq,q,1);
	mpz_mul(pi_n,cp,cq);
	cout<<pi_n<<"\n";
	mpz_set_ui(e,1);
	mpz_t gcd;
	mpz_inits(gcd,NULL);
        //finding e
	for(;;)
	{
		mpz_urandomm(de,state,pi_n);
		
		mpz_gcd(gcd,de,pi_n);
		if(mpz_cmp_ui(gcd,1)==0)
		{
			mpz_set(e,de);
			break;
		}
	}
	if(mpz_cmp_ui(e,1)==0)
	return 0;
	cout<<"e is :"<<de<<"\n";
	mpz_invert(d,e,pi_n);
	cout<<"d is :"<<d<<"\n";
	mpz_t pt,ct;
	mpz_inits(pt,ct,NULL);
	cout<<"enter plain text : ";	
	cin>>pt;
	encryption(ct,pt,e,n);
	cout<<"ciphered text is :"<<ct<<"\n";
	decryption(pt,ct,d,n);
	cout<<"plain text is : "<<pt<<"\n";	
}
