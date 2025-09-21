# Assignment 5 Soal 1

<div class="text-sm">
implementasikan UML berikut dengan class Test dan perbaiki class Test tersebut:
</div>
<div class="flex">

<div class="">

```java
class Test {
  public static void main(String[] args) {
    Converter conv1 = new TemperatureConverter();
    System.out.println("Celsius ke Fahrenheit: " + conv1.convert(25));
    System.out.println("Fahrenheit ke Celsius: " + conv1.revert(77));

    Converter conv2 = new CurrencyConverter(15000);
    // Change line of code below to fix the problem without change declaration code!
    conv2.convert(100);
  }
}
```

Dengan ketentuan :
- `Converter` adalah class interface
- `TemperatureConverter` adalah class implement `Converter` (konversi suhu)
- `CurrencyConverter` adalah class implement `Converter` (konversi uang, kurs Rupiah–USD)

</div>

<div>

<img src="/asset/image.png" class="w-auto m-auto" />

</div>
</div>



