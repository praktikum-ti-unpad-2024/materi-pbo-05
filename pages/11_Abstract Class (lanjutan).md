# Abstract Class (lanjutan)

Contoh penggunaan abstract class

<div class="grid grid-cols-2 gap-4">

<div v-click="1" class="">

```java
public abstract class Animal {
    private String name;

    public Animal(String name) {
      this.name = name;
    }

    public String getName() {
      return name;
    }

    public abstract String getSound();
}
```

</div>

<div v-click="2" class="">

```java
public class Cat extends Animal {
    public Cat(String name) {
      super(name);
    }

    @Override
    public String getSound() {
      return "Miaw";
    }
}
```

</div>
</div>
