# Abstract Class (other)

<div class="grid grid-cols-2 gap-4">


<div>

Python

```python
from abc import ABC,abstractmethod
 
class Animal(ABC):
    @abstractmethod
    def getSound(self):
        pass

class Snake(Animal):
    def getSound(self):
        print("HISSS")
```

</div>

<div>

C++

```cpp
class Animal {
   public:
      virtual int getSound() = 0;
};

class Tiger: public Animal {
  public:
    void getSound() {
      cout << "Roar";
    }
};
```

</div>
</div>
