---
layout: center
---

# Exercise <kbd><span class='text-teal'>Race.java</span></kbd>

<div class="grid grid-cols-2 gap-2">

<div class="text-sm">

Buatlah 7 buah class :
- `StreetCircuit`, class interface dengan 1 buah methods :
    - calculateRaceTime(double lapTime, int laps, double penaltyTime)
- `OvalCircuit`, class interface dengan 1 buah methods :
    - calculateRaceTime(double lapTime, int laps)
- `RallyCircuit`, class interface dengan 1 buah methods :
    - calculateRaceTime(double lapTime, int laps, double terrainMultiplier)
- `MonacoRace`, class implementasi `StreetCircuit`
- `Indy500Race`, class implementasi `OvalCircuit`
- `DakarRally`, class implementasi `RallyCircuit`
- `RacingVehicle`, parent class dari `MonacoRace`, `Indy500Race`, dan `DakarRally` (di extend) dengan 1 buah method : 
    - calculateRaceTime() yang mereturn 0

Buat kelas `Race.java` untuk membuat objek dari kelas `MonacoRace`,`Indy500Race`, dan `DakarRally` lalu panggil ketiga objek tersebut beserta methodnya untuk menghitung total waktu balapan.

</div>
<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm gap-3'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='flex flex-col mb-2'>
    <span>Data untuk tiga jenis balapan: waktu per lap, jumlah lap, dan faktor unik (penalti/terrainMultiplayer)</span>
</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<span>Total waktu balapan yang telah dihitung untuk setiap sirkuit</span>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Contoh</span>
<div class='mt-4 flex flex-col mb-2 gap-0'>
Contoh Input & Output

```bash
== Data Balapan Monaco (Street Circuit) ==
Masukkan waktu per lap (detik): 65.5
Masukkan jumlah lap: 78
Masukkan penalti waktu (detik): 10
== Data Balapan Indy 500 (Oval Circuit) ==
Masukkan waktu per lap (detik): 123.0
Masukkan jumlah lap: 200
== Data Balapan Dakar (Rally Circuit) ==
Masukkan waktu per lap (menit): 80.0
Masukkan jumlah lap: 10
Masukkan pengganda medan: 1.2
```
```bash
Total waktu balapan Monaco: 5119.00 detik
Total waktu balapan Indy 500: 24600.00 detik
Total waktu balapan Dakar: 960.00 menit
```
</div>
</div>
</div>