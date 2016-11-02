#include<bits/stdc++.h>
#include<gmp.h>
using namespace std;

int main()
{
        mpz_t q,a,l,p,k1,k2,temp1,temp2;
	mpz_inits(q,a,l,p,k1,k2,temp1,temp2,NULL);
	int bit =10;
	gmp_randstate_t state;
	gmp_randinit_default(state);
        //selecting large prime q
        while(1)
	{
	mpz_urandomb(q,state,256);
	mpz_mul(l,2,q);
	mpz_nextprime(p,l);
        mpz_add_ui(l,l,1);
        if(mpz_cmp(l,p)==0)
	{
          mpz_set(k1,2);
          mpz_set(k2,p);
          gmp_randstate_t state1;
	  gmp_randinit_default(state1);
	  while(1)
	  {
	  mpz_urandomb(a,state1,256);
          mpz_powm();
