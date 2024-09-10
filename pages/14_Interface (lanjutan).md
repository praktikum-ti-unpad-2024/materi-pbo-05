# Interface (lanjutan)


<br>

Suatu class dapat mengimplementasi lebih dari 1 Interface.

```java
public class Fish implements Animal, Mammals {
  private String name;

  public Fish(String name) {
    this.name = name;
  }
}
```

Interface dapat dapat meng-extend lebih dari 1 Interface lainnya.


```java
public interface Hockey extends Event, Sports {
  // Methods here
}
```
