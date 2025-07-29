import 'dart:io';
void main() {

stdout.write('masukkan panjan: ');
String? panjangInput = stdin.readLineSync();
int panjang = int.parse(panjangInput ?? '0');

stdout.write('masukkan lebar: ');
String? lebarInput = stdin.readLineSync(); 
int lebar = int.parse(lebarInput ?? '0');

int luas = panjang * lebar;
int keliling = 2 * panjang + lebar;

print("luas = $luas");
print("keliling = $keliling");

}
