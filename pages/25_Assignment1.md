# Assignment 5 Soal 1

<div class="text-sm">
implementasikan UML berikut dengan class Test dan perbaiki class Test tersebut:
</div>
<div class="flex">

<div class="">

```java
class Test {
  public static void printMovablePoint(MovablePoint point) {
    System.out.println(point);
  }

  public static void main(String[] args) {
    MovablePoint point1 = new MovablePoint(0,0);
    point1.moveUp();
    point1.moveUp();
    point1.moveDown();
    point1.moveRight();
    point1.moveRight();
    point1.moveRight();
    point1.moveLeft();
    System.out.println(point1);

    Movable point2 = new MovablePoint(3,2);
    // Change line of code below to fix the problem without change declaration code!
    printMovablePoint(point2);
  }
}
```
</div>

<div>

<img src="/asset/soal1.png" class="w-2/3 m-auto" />

</div>
</div>



