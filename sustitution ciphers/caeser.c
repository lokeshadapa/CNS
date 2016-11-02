#include <iostream>
#include <string.h>
using namespace std;
int main()
{
   string a;
   int key;
   cout<<"Enter the string ";
   cin>>a;
   cout<<"Enter key ";
   cin>>key;
   for(int i=0;i<a.length();i++)
   {
      a[i]=a[i]-'a';
      a[i]=a[i]+key;
      a[i]=a[i]%26;
      a[i]=(a[i]+'a');
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
      a[i]=a[i]-key;
      a[i]=a[i]%26;
      a[i]=(a[i]+'a');
   }
cout<<"deciphered ";
   for(int i=0;i<a.length();i++)
   {
      cout<<a[i];
   }
cout<<endl;
  return 0;
}

