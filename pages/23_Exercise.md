---
layout: center
---

### Exercise <kbd><span class='text-teal'>RaceLap.java</span></kbd>

<div class="grid grid-cols-2 gap-2">

<div class="text-[11px]">

<!-- Buat abstract class 'Shape' dengan tiga method abstrak yaitu 'rectangleArea' yang memiliki dua parameter, 'squareArea' dan 'circleArea' yang masing-masing memiliki satu parameter. Parameter dalam 'rectangleArea' adalah panjang dan lebar persegi panjang, 'squareArea' adalah sisi persegi, dan 'circleArea' adalah jari-jari lingkaran. Kemudian buat kelas 'Area' yang meng-extend kelas 'Shape' untuk mencetak luas persegi panjang, persegi dan lingkaran.  -->

Buatlah 7 buah class :
- `RaceCar`, class interface dengan 1 buah method:
    - double getLapTime();
- `Car`, class abstract yang mengimplementasikan <span class='text-teal'>RaceLap.java</span> dengan atribut:
    - String name (nama mobil)
    - double lapTime (lap time dalam detik)
    - abstract method getLapTime();
- `Mobil1, Mobil2, Mobil3, Mobil4, Mobil5`, class turunan dari Car:
    - Mengimplementasikan method <span class='text-teal'>getLapTime()</span> untuk mengembalikan nilai lapTime.
- `RaceResult`, class dengan 1 method:
    - showResults(Car[] cars)
    - Menentukan mobil tercepat.
    - Mengurutkan mobil berdasarkan lap time.
    - Menampilkan hasil balapan dengan format:
        - Mobil tercepat ditampilkan dengan waktu lap.
        - Mobil selanjutnya ditampilkan dengan selisih waktu terhadap mobil sebelumnya.

Buat kelas `RaceLap.java` untuk:
1. Input nama & waktu lap (detik) dari 5 mobil melalui terminal.  
2. Membuat objek dari lima mobil tersebut.  
3. Memanggil `RaceResult.showResults()` untuk menampilkan hasil perlombaan.
</div>

<div class=' grid grid-cols-[0.2fr_1.5fr] items-center text-sm gap-3'>
<span class='text-[11px] text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col  text-[11px]'>
    <span>Nama mobil & lap time (detik) dari 5 mobil balap</span>
</div>
<span class='text-[11px] text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col  text-[11px]'>
    <span>Urutan mobil tercepat beserta selisih waktu (delta time)</span>
</div>
<span class='text-[11px] text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col  gap-0'>
<div class='flex flex-col  text-[11px]'>
    <span>Contoh Input & Output</span>
</div>

```bash
Masukkan nama mobil 1: Red Bull
Masukkan lap time mobil 1 (detik): 72.53

Masukkan nama mobil 2: Ferrari
Masukkan lap time mobil 2 (detik): 73.21

Masukkan nama mobil 3: Mercedes
Masukkan lap time mobil 3 (detik): 72.88

Masukkan nama mobil 4: McLaren
Masukkan lap time mobil 4 (detik): 74.02

Masukkan nama mobil 5: Aston Martin
Masukkan lap time mobil 5 (detik): 73.77
```
```bash
Hasil Balapan F1:
1. Red Bull - 72.53 detik
2. Mercedes - +0.35 
3. Ferrari  - +0.68 
4. Aston Martin - +1.24 
5. McLaren - +1.49 
```

</div>
</div>
</div>