// while loops

#include <bits/stdc++.h>
using namespace std;

// int main()
// {
//     int i = 1;
//     while(i <= 10)
//     {
//         cout<< i << endl;
//         i++;
//     }
// }

// From 1 to n
// int main()
// {
//   int n;
//   cin >> n;
//   int i = 1;
//   while (i <= n)
//   {
//     cout << i << endl;
//     i++;
//   }
  
// }

// From n to 1
// int main()
// {
//   int n;
//   cin >> n;

//   int i = n;
//   while (i >= 1)
//   {
//     cout << i << endl;
//     i--;
//   }
  
// }

// From lhs to rhs
// int main()
// {
//   int l , r;
//   cin >> l >> r;
//   int i = l;
//   while (i <= r)
//   {
//     cout << i << endl;
//     i++;
//   }
  
// }


// Print all Even Numbers from 1 to N

// int main(){
//   int n;
//   cin >> n;
  
//   int i = 1;
//   while (i <= n)
//   {
//     if(i % 2 == 0){
//       cout << i << endl;
//     }
//     i++;
//   }
  

// }

// Print All uppercase Alphabets (A-z)
 
// int main(){
//   char ch = 'A';
  
//   while ( ch <= 'Z')
//   {
//    cout << ch << endl;
//    ch++;
//   }
  
// }

// print multiplication table up to 10
// int main(){
//   int n;
//   cout << "Enter a Number: " << endl;
//   cin >> n;
//   int i = 1;
//   while (i <= 10)
//   {
//     cout  << n << "*" << i << "=" << ( n * i) << endl;
//     i++;
//   }
//   return 0;
// }

// print number in reverse

// int main(){
//   int n;
//   cin >> n;
//   while(n != 0){
//     cout  << n % 10;
//     n = n/10;
//   }
// }

// Sum of all the digits 
// int main(){
//    int n;
//    cin >> n ;
//    int sum = 0;
//    while (n != 0)
//    {
//     sum += n%10;
//     n = n/10;
//    }
   
// cout << sum << endl;

// }


// Reverse and store in the varible
// int main(){
//    int n;
//    cin >> n ;
   
//    if(n == 0){
//     cout << 0;
//    }

//    int rv = 0;
//    while (n != 0)
//    {
//     rv = (rv*10) + n%10;
//     n = n/10;
//    }
   
// cout << rv << endl;

// }


// Palindrome

// int main(){
//    int n;
//    cin >> n ;
//    int temp = n; // Beacue the n eventually became 0 after operations
//    if(n == 0){
//     cout << 0;
//    }
   
//    int rv = 0;
//    while (n != 0)
//    {
//     rv = (rv*10) + n%10;
//     n = n/10;
//    }
   
//   if(rv == temp){
//     cout << "Palindrome = Yes";
//   }
//   else {
//     cout << "Palindrome = NO";
//   }

// }

// Print stars in n time line and m times of stars  = in rectangle
// int main(){
//   int n;
//   cin >> n;
  
//   int m;
//   cin >> m;

//   for (int i = 1; i <= n; i++)
//   {
//    for (int j = 1; j <= m; j++)
//    {
//     cout << "*";
//    }
//    cout << endl;
//   }
  

// }

// Print stars in square shape

// int main(){
//   int n;
//   cin >> n;
  
//   for (int i = 1; i <= n; i++)
//   {
//    for (int j = 1; j <= n; j++)
//    {
//     cout << "*";
//    }
//    cout << endl;
//   }
  

// }


// Print Piramid/ Triangle 

// int main(){
//   int n;
//   cin >> n;
  
//   for (int i = 1; i <= n; i++)
//   {
//    for (int j = 1; j <= i; j++)
//    {
//     cout << "*";
//    }
//    cout << endl;
//   }
  

// }


// Pyramid in the inverted direction 
// int main(){
//   int n;
//   cin >> n;
  
//   for (int i = n; i >= 1; i--)
//   {
//    for (int j = 1; j <= i; j++)
//    {
//     cout << "*";
//    }
//    cout << endl;
//   }
  

// }


// PRint Hollow square = Foucus on boundry points

// int main(){
//   int n;
//   cin >> n;
  
//   for (int i = 1; i <= n; i++)
//   {
//    for (int j = 1; j <= n; j++)
//    {
//     if( i == 1 or i == n or j ==1 or j ==n )
//     {
//       cout << "*";
//     }
//     else{
//       cout << " ";
//     }
//    }
//    cout << endl;
//   }
  
// }


// A rectangular shape = Hollow shape

// int main(){
//   int n;
//   cin >> n;
  
//   int m;
//   cin >> m;

//   for (int i = 1; i <= n; i++)
//   {
//    for (int j = 1; j <= m; j++)
//    {
//     if( i == 1 or i == n or j ==1 or j ==m )
//     {
//       cout << "*";
//     }
//     else{
//       cout << " ";
//     }
//    }
//    cout << endl;
//   }
  
// }

// Hollow Trinagle 

// int main(){
//   int n;
//   cin >> n;
  
//   for (int i = 1; i <= n; i++)
//   {
//    for (int j = 1; j <= i; j++)
//    {
//     if( i == 1 or i == n or j ==1 or j ==i )
//     {
//       cout << "*";
//     }
//     else{
//       cout << " ";
//     }
//    }
//    cout << endl;
//   }
  
// }



// Hollow inverted triangle

// int main(){
//   int n;
//   cin >> n;
  
//   for (int i = n; i >= 1; i--)
//   {
//    for (int j = 1; j <= i; j++)
//    {
//     if( i == 1 or i == n or j ==1 or j ==i )
//     {
//       cout << "*";
//     }
//     else{
//       cout << " ";
//     }
//    }
//    cout << endl;
//   }
  
// }



// Print i 

// int main(){
//   int n;
//   cin >> n;
  
//   int m;
//   cin >> m;

//   for (int i = 1; i <= n; i++)
//   {
//    for (int j = 1; j <= m; j++)
//    {
//     cout << i;
//    }
//    cout << endl;
//   }
// }



// print j


// int main(){
//   int n;
//   cin >> n;
  
//   int m;
//   cin >> m;

//   for (int i = 1; i <= n; i++)
//   {
//    for (int j = 1; j <= m; j++)
//    {
//     cout << j;
//    }
//    cout << endl;
//   }
// }



// Printing the chr in rows (j)

// int main(){
//   int n;
//   cin >> n;
  
//   int m;
//   cin >> m;

//   for (int i = 1; i <= n; i++)
//   {
//     char ch = 'A';
//    for (int j = 1; j <= m; j++)
//    {
//     cout << ch;
//     ch++;
//    }
//    cout << endl;
//   }
// }


// Print on i char


int main(){
  int n;
  cin >> n;
  
  int m;
  cin >> m;
  char ch = 'A';
  for (int i = 1; i <= n; i++)

  {
   for (int j = 1; j <= m; j++)
   {
    cout << ch;
   }
   cout << endl;
   ch++;
  }
}

