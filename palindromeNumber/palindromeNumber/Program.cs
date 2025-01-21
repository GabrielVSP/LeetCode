int x = -121;

char[] reverse = x.ToString().ToCharArray();
Array.Reverse(reverse);
string reversed = new string(reverse);

Console.WriteLine(reversed);
Console.WriteLine(reversed == x.ToString());