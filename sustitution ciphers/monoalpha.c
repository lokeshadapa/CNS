#include <iostream>
#include <string.h>
using namespace std;
int main()
{
  cout<<"enter string ";
  string a;
  cin>>a;
  int key[26]={25,24,23,22,21,20,19,18,0,1,2,3,4,5,17,16,15,14,13,12,11,10,9,8,7,6}; 
  for(int i=0;i<a.length();i++)
   {
      a[i]=a[i]-'a';
      a[i]=(key[a[i]]+'a');
   }
cout<<"ciphered ";
   for(int i=0;i<a.length();i++)
   {
      cout<<a[i];
   }
cout<<endl;
  for(int i=0;i<a.length();i++)
   {
      a[i]=a[i]-'a';
      for(int j=0;j<26;j++)
      {
         if(key[j]==a[i])
            {
              a[i]=j+'a';
            }
      }
   }
cout<<"deciphered ";
   for(int i=0;i<a.length();i++)
   {
      cout<<a[i];
   }
cout<<endl;
}
