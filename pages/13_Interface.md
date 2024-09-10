# Interface

<div class="grid grid-cols-2 gap-4">

<div>

Interface berbentuk abstract secara implisit, baik dari keyword Interface nya, maupun method-method didalamnya.

Jika Class diibaratkan sebagai sebuah Blueprint, Interface di sisi lain diibaratkan sebagai sebuah Contract yang wajib dipatuhi (dalam arti diimplementasikan).

Method-method pada interface secara implisit memiliki akses modifier public.

Perhatikan penulisan interface serta pengimplementasiannya pada gambar disamping

</div>

<div>
<div v-click="1" class="">

```java
interface Animal {
  public void eat();
  public void travel();
}
```

</div>
<div v-click="2" class="">

```java
public class Fish implements Animal {
    private String name;

    public Fish(String name) {
      this.name = name;
    }

    @Override
    public void eat() {
      System.out.println("Eat");
    }

    @Override
    public void travel() {
      System.out.println("Swim");
    }
}
```

</div>
</div>
</div>
