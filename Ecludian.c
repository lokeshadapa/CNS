#include<stdio.h>
#include<gmp.h>
#include<time.h>

void gcd(mpz_t a,mpz_t b)
	{
		if(mpz_cmp_ui(a,0)==0)
			{//printf("gcd is : "); 
             mpz_abs(b,b);
             //return b;
		     mpz_out_str(NULL,10,b);
		     //printf("\n");
            }
        else
        {
        	mpz_mod(b,b,a);
		    gcd(b,a);
        }
	}

int main()
{
	/*int gcd(int a,int b)
	{
		if(b==0)
			return a;
		gcd(b,a%b);
	}*/
	mpz_t a,b,ran1,ran2;
	gmp_randstate_t state1;
	mpz_init(a);mpz_init(b);mpz_init(ran1);mpz_init(ran2);
	gmp_randinit_mt(state1);
	//printf("enter a : ");
	//mpz_inp_str(a,NULL,10);
	//printf("enter b : ");
	//mpz_inp_str(b,NULL,10);
	int i=100;
	while(i>0)
	{
	mpz_urandomb (ran1,state1,32);
	mpz_urandomb (ran2,state1,32);
    //mpz_set(ans,&gcd(ran1,ran2));
    mpz_out_str(NULL,10,ran1);
    printf("	");
    mpz_out_str(NULL,10,ran2);
    printf("	");
    clock_t start=clock(),diff;
    gcd(ran1,ran2);
    diff=clock()-start;
    double time= (double)diff/CLOCKS_PER_SEC;
    printf("	%f\n",time);
    printf("\n");
    i--;
	}
    mpz_clear(a);mpz_clear(b);
    return 0;

}
