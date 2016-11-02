#include <iostream>
#include <string>
using namespace std;
int main()
{
  int a[26][26];
  for(int i=0;i<26;i++)
  {
    for(int j=i;j<26+i;j++)
     {
	a[i][j-i]=j%26; 
     }
  }
  cout<<"enter string ";
  string s,key;
  cin>>s;
  cout<<"enter key ";
  cin>>key;
  size_t ssize = s.length();
  size_t ksize = key.length();
  if(key.length()!=ssize)
  {
    size_t diff= ssize-ksize;
    int rep = diff/ksize;
    string temp=key;
    while(rep>0)
    { key=key+temp;
      rep--;
    }
    int l = diff%ksize;
    for(int i=0;i<l;i++)
    { key=key+key[i];}
  }
    cout<<"text	"<<s<<endl;
    cout<<"key	"<<key<<endl;
    string result;
   for(int i=0;i<ssize;i++)
  {  int t1 = s[i]-'a';
     int t2 = key[i]-'a';
     int res = a[t2][t1]+97;
     string t3;
     t3 = (char) res;
     result = result+t3;
  }
   cout<<"result	"<<result<<endl; 
  return 0;
}
