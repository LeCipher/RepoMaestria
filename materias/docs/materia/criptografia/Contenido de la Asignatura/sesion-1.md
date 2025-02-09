---
title: Introducción y Cripgrafica
sidebar_position: 1
---

# Guía Completa de Criptografía Clásica y Moderna con Énfasis en Aritmética Modular y RSA

La criptografía es el arte de proteger mensajes y datos para que solo sean legibles por aquellos a quienes van dirigidos. En este documento, haremos un recorrido completo comenzando con la **criptografía clásica**, pasando por los fundamentos de la **aritmética modular** y culminando en el sistema de cifrado **RSA**, uno de los pilares de la criptografía moderna. Finalmente, hablaremos brevemente del **Algoritmo de Shor** y su relevancia en la era cuántica.

---

## 1. Introducción: ¿Por qué estudiar criptografía?

- **Protección de datos**: Vivimos en una sociedad digitalizada. Nuestros datos necesitan protección continua.
- **Historia y evolución**: La criptografía se ha usado durante siglos; entender la base histórica nos ayuda a comprender los sistemas actuales.
- **Base para la computación segura**: Con el auge de la computación cuántica, es clave entender los fundamentos para transicionar a la criptografía post-cuántica.

En este documento encontrarás una explicación paso a paso con ejemplos prácticos en Python y referencias matemáticas en formato LaTeX para facilitar su lectura.

---

## 2. Criptografía Clásica

Aunque hoy en día los cifrados clásicos no se usan para fines prácticos de alta seguridad, son el mejor punto de partida para entender los principios básicos de la criptografía.

### 2.1 El Cifrado César

**Definición**: Desplaza cada letra del alfabeto un número fijo de posiciones.  
Ejemplo con desplazamiento $$k = 3$$:  
- A → D  
- B → E  
- C → F  

**Fórmula**:

$$
C = (P + k) \mod n
$$

- $$P$$ es la posición de la letra (A=0, B=1, …).
- $$k$$ es la clave (desplazamiento).
- $$n$$ es el tamaño del alfabeto (por ejemplo, 26 en el alfabeto inglés).

**Ejemplo en Python** (sin las comillas de bloque adicionales dentro del código):
``` python
def cifrado_cesar(mensaje, k):
    """
    Aplica Cifrado César con desplazamiento k a un mensaje en mayúsculas.
    """
    alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    cifrado = ""

    for letra in mensaje:
        if letra in alfabeto:
            pos = alfabeto.index(letra)
            pos_cifrada = (pos + k) % len(alfabeto)
            cifrado += alfabeto[pos_cifrada]
        else:
            cifrado += letra

    return cifrado

def descifrado_cesar(mensaje_cifrado, k):
    """
    Deshace el Cifrado César con desplazamiento k.
    """
    return cifrado_cesar(mensaje_cifrado, -k)

# Ejemplo de uso:
mensaje_original = "HOLA MUNDO"
k = 3

mensaje_cifrado = cifrado_cesar(mensaje_original, k)
mensaje_descifrado = descifrado_cesar(mensaje_cifrado, k)

print("Mensaje Original:   ", mensaje_original)
print("Mensaje Cifrado:    ", mensaje_cifrado)
print("Mensaje Descifrado: ", mensaje_descifrado)

> **Resultado**:  
> - Mensaje Cifrado: “KROD PXQGR” (desplazamiento de 3 posiciones).  
> - Mensaje Descifrado: “HOLA MUNDO”.
```
---

## 3. Aritmética Modular

La **aritmética modular** es un pilar fundamental de la criptografía moderna, incluida RSA. Se centra en la idea de trabajar con restos (residuos) de división.

### 3.1 Conceptos básicos

- **Operación “mod”**:  
  Si tenemos $$a \mod n$$, estamos calculando el residuo de la división de $$a$$ entre $$n$$.  
  Por ejemplo,  
  $$17 \mod 5 = 2$$  
  porque 17 = 3 × 5 + 2.

- **Suma y multiplicación modulares**:  
  $$ (a + b) \mod n = \big((a \mod n) + (b \mod n)\big) \mod n $$  
  $$ (a \times b) \mod n = \big((a \mod n) \times (b \mod n)\big) \mod n $$

### 3.2 Inverso modular

El **inverso modular** de un número $$a \mod n$$ es otro número $$x$$ tal que:

$$
a \cdot x \equiv 1 \mod n
$$

Solo existe si $$mcd(a, n) = 1$$. El cálculo del inverso modular se realiza comúnmente usando el **Algoritmo Extendido de Euclides**.

#### Algoritmo Extendido de Euclides (Explicación breve)

Dado $$a$$ y $$b$$, el **Algoritmo de Euclides** calcula $$mcd(a, b)$$ de forma eficiente. El **Algoritmo Extendido** no solo calcula la $$mcd$$, sino también los coeficientes $$x$$ y $$y$$ tales que:

$$
a \cdot x + b \cdot y = mcd(a, b)
$$

Si $$mcd(a, b) = 1$$, entonces $$a \cdot x + b \cdot y = 1$$. Reduciendo “mod b”, resulta $$a \cdot x \equiv 1 \mod b$$. Así, $$x$$ es el **inverso modular** de $$a$$ en “mod $$b$$”.

#### Ejemplo en Python
```python
def extended_mcd(a, b):
    """
    Retorna una tupla (g, x, y) tal que a*x + b*y = g = mcd(a, b).
    """
    if b == 0:
        return (a, 1, 0)
    else:
        g, x1, y1 = extended_mcd(b, a % b)
        x = y1
        y = x1 - (a // b) * y1
        return (g, x, y)

def mod_inverse(a, m):
    """
    Calcula el inverso modular de a (mod m) usando el algoritmo extendido de Euclides.
    Devuelve x tal que (a*x) % m == 1.
    """
    g, x, _ = extended_mcd(a, m)
    if g != 1:
        raise Exception("El inverso modular no existe (mcd != 1).")
    return x % m

# Ejemplo de uso:
a = 7
m = 26
inv = mod_inverse(a, m)
print(f"El inverso modular de {a} mod {m} es {inv}")
# Verificamos la condición a * x ≡ 1 (mod m)
print(f"Verificación: (7 * {inv}) mod 26 = {(7*inv) % 26}")
```

**Salida esperada**:
- El inverso modular de 7 mod 26 es 15.  
- Verificación: (7 * 15) mod 26 = 1.

### 3.3 Teorema de Fermat y Teorema de Euler

- **Teorema Pequeño de Fermat**:  
  Si $$p$$ es un número primo y $$mcd(a, p) = 1$$, entonces:  
  $$ a^{p-1} \equiv 1 \mod p $$

- **Función de Euler $$\varphi(n)$$**:  
  Es el número de enteros en [1..n] que son coprimos con $$n$$.  
  Para $$n = p \cdot q$$ con $$p, q$$ primos:  
  $$ \varphi(n) = (p-1)(q-1) $$

- **Teorema de Euler**:  
  Si $$mcd(a, n) = 1$$, entonces:  
  $$ a^{\varphi(n)} \equiv 1 \mod n $$

Estos teoremas son la **base** de muchos sistemas de criptografía asimétrica, **incluido RSA**.

---

## 4. RSA: Criptografía Asimétrica

### 4.1 ¿Qué es RSA?

RSA (Rivest–Shamir–Adleman) es un cifrado **asimétrico** que usa dos claves:
1. **Clave Pública** $$ (n, e) $$: Para cifrar mensajes y verificar firmas.
2. **Clave Privada** $$ (n, d) $$: Para descifrar mensajes y firmar.

La seguridad de RSA reside en la dificultad de factorizar grandes números compuestos por dos primos grandes.

### 4.2 Generación de claves RSA

1. **Elegir dos primos grandes** $$p$$ y $$q$$.
2. **Calcular** $$n = p \times q$$.
3. **Calcular** $$\varphi(n) = (p-1)(q-1)$$.
4. **Elegir** un exponente público $$ e $$ tal que $$mcd(e, \varphi(n)) = 1$$ (Suele elegirse $$e = 65537$$).
5. **Calcular** el exponente privado $$ d $$ como inverso modular de $$ e $$ en $$\varphi(n)$$:  
   $$ e \cdot d \equiv 1 \mod \varphi(n) $$
6. **Clave Pública**: $$(n, e)$$  
   **Clave Privada**: $$(n, d)$$

### 4.3 Cifrado y Descifrado

- **Cifrado**:  
  $$ C = M^e \mod n $$
  donde $$M$$ es el mensaje representado como un número en [0..n-1].

- **Descifrado**:  
  $$ M = C^d \mod n $$

### 4.4 Ejemplo Detallado de RSA en Python
```python
import random
from math import mcd

def es_primo(num):
    """
    Chequea si un número es primo de manera sencilla.
    (No es óptimo para grandes valores, pero sirve en este ejemplo.)
    """
    if num < 2:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def generar_primo(limite_inferior, limite_superior):
    """
    Genera un número primo aleatorio en el rango [limite_inferior, limite_superior].
    """
    while True:
        p = random.randint(limite_inferior, limite_superior)
        if es_primo(p):
            return p

def extended_mcd(a, b):
    """
    Algoritmo Extendido de Euclides: retorna (g, x, y) tal que a*x + b*y = g = mcd(a, b).
    """
    if b == 0:
        return (a, 1, 0)
    else:
        g, x1, y1 = extended_mcd(b, a % b)
        x = y1
        y = x1 - (a // b) * y1
        return (g, x, y)

def mod_inverse(a, m):
    """
    Calcula el inverso modular de a (mod m).
    """
    g, x, _ = extended_mcd(a, m)
    if g != 1:
        raise Exception("No existe inverso modular, mcd != 1.")
    return x % m

def generar_claves_rsa():
    # 1. Elegir dos primos (pequeños para este ejemplo)
    p = generar_primo(100, 300)
    q = generar_primo(100, 300)
    # Asegurarnos de que sean distintos
    while p == q:
        q = generar_primo(100, 300)
    
    # 2. Calcular n y phi(n)
    n = p * q
    phi_n = (p - 1) * (q - 1)
    
    # 3. Elegir e
    e = 65537  # Valor comúnmente usado
    # Ajustar e en caso de que no sea coprimo con phi_n
    while mcd(e, phi_n) != 1:
        e = random.randint(2, phi_n - 1)

    # 4. Calcular d
    d = mod_inverse(e, phi_n)

    # Retornar las claves: pública y privada
    return (n, e, d)

def cifrar_rsa(m, n, e):
    """
    Cifra el mensaje m usando la clave pública (n, e).
    """
    return pow(m, e, n)

def descifrar_rsa(c, n, d):
    """
    Descifra el mensaje c usando la clave privada (n, d).
    """
    return pow(c, d, n)

# Ejemplo de uso:
if __name__ == "__main__":
    # Generar un par de claves
    n, e, d = generar_claves_rsa()
    
    # Mostrar información de las claves
    print("Clave pública (n, e) =", (n, e))
    print("Clave privada (n, d) =", (n, d))
    
    # Supongamos que queremos cifrar el número 123
    mensaje = 123
    print("\nMensaje original =", mensaje)
    
    # Cifrado
    mensaje_cifrado = cifrar_rsa(mensaje, n, e)
    print("Mensaje cifrado =", mensaje_cifrado)
    
    # Descifrado
    mensaje_descifrado = descifrar_rsa(mensaje_cifrado, n, d)
    print("Mensaje descifrado =", mensaje_descifrado)
```
---

## 5. Algoritmo de Shor

### 5.1 ¿Qué es?

El **Algoritmo de Shor** (creado por Peter Shor en 1994) es un **algoritmo cuántico** que factoriza números enteros de manera exponencialmente más rápida que los mejores métodos clásicos conocidos. Está diseñado para una **computadora cuántica** que maneje qubits y puertas lógicas cuánticas.

### 5.2 Relevancia para RSA

- **Amenaza Cuántica**: RSA basa su seguridad en la dificultad de factorizar grandes enteros. El algoritmo de Shor demuestra que, con suficiente potencia cuántica, se podrían factorizar dichos enteros grandes en **tiempo polinómico**, rompiendo así la seguridad de RSA.
- **Estado actual**: A día de hoy, no disponemos de computadoras cuánticas con la capacidad suficiente para romper RSA de 2048 bits. Sin embargo, la investigación en computación cuántica avanza rápidamente.
- **Criptografía Post-Cuántica**: Ante la amenaza futura de Shor, se están desarrollando nuevos esquemas criptográficos basados en problemas que se cree que son resistentes a ataques cuánticos (p.e., basados en redes euclidianas o códigos lineales).

---
## 6. Implementación de RSA en Python

En esta sección, exploraremos una implementación en Python del algoritmo RSA, cubriendo cada paso necesario para la generación de claves, cifrado y descifrado de mensajes. Veremos cómo se utilizan conceptos fundamentales como números primos, coprimalidad e inversos modulares, temas ya introducidos en las secciones anteriores de este documento.

### 6.1 Funciones auxiliares

Antes de entrar en la generación de claves RSA, necesitamos definir algunas funciones auxiliares que nos ayudarán a trabajar con números primos y la función totient de Euler \( \varphi(n) \).

### 6.1.1 Obtener factores de un número

Para verificar la coprimalidad de dos números, primero debemos poder obtener los factores de un número dado:

```python
def get_factors(num):
    factors = []
    for i in range(2, int(num)):
        if num % i == 0:
            factors.append(i)
    return factors
```

### 6.1.2 Verificar si un número es primo

Podemos determinar si un número es primo comprobando si tiene factores distintos de 1 y sí mismo:

```python
def is_prime(num):
    for i in range(2, num):
        if num % i == 0:
            return False
    return True
```

### 6.1.3 Verificar si dos números son coprimos

Dos números son coprimos si no comparten factores en común (su máximo común divisor es 1). En RSA, esto es clave para elegir el exponente público \( e \):

```python
def is_coprime(num1, num2):
    num1_factors = get_factors(num1)
    num2_factors = get_factors(num2)
    return set(num1_factors).isdisjoint(set(num2_factors))
```

### 6.2 Función de Euler

Como se explicó en la sección anterior sobre aritmética modular, la función de Euler \( \varphi(n) \) es crucial en RSA. Se define como:

\[
\varphi(n) = (p-1) \times (q-1)
\]

donde \( p \) y \( q \) son números primos.

```python
def phi_n(prime1, prime2):
    return (prime1 - 1) * (prime2 - 1)
```

### 6.3 Elección de `e`

El número \( e \) es el exponente de la clave pública y debe cumplir \( \gcd(e, \varphi(n)) = 1 \). Es decir, \( e \) debe ser coprimo con \( \varphi(n) \):

```python
def find_e(prime1, prime2):
    phi = phi_n(prime1, prime2)
    n = prime1 * prime2
    candidates = []
    for i in range(3, n):
        if is_prime(i) and is_coprime(i, n) and is_coprime(i, phi):
            candidates.append(i)
    return candidates
```

Un valor comúnmente utilizado para \( e \) en RSA es **65537**, ya que es primo y tiene buenas propiedades matemáticas para optimizar el cifrado.

### 6.4 Cálculo de `d`

El número \( d \) es el inverso modular de \( e \) en módulo \( \varphi(n) \), es decir:

\[
d \equiv e^{-1} \mod \varphi(n)
\]

Podemos calcularlo con el **Algoritmo Extendido de Euclides**:

```python
def extended_mcd(a, b):
    if b == 0:
        return (a, 1, 0)
    else:
        g, x1, y1 = extended_mcd(b, a % b)
        x = y1
        y = x1 - (a // b) * y1
        return (g, x, y)

def mod_inverse(e, phi):
    g, x, _ = extended_mcd(e, phi)
    if g != 1:
        raise Exception("El inverso modular no existe (mcd != 1).")
    return x % phi
```

### 6.5 Generación de claves RSA

Juntando todas estas funciones, podemos generar un par de claves RSA:

```python
import random

def generate_rsa_keys():
    p = 61  # Número primo
    q = 53  # Número primo
    n = p * q
    phi = phi_n(p, q)
    e_options = find_e(p, q)
    e = e_options[0]  # Elegimos el primer valor de `e` válido
    d = mod_inverse(e, phi)
    return (n, e, d)

public_key, private_key = generate_rsa_keys()
print("Clave pública (n, e):", public_key)
print("Clave privada (n, d):", private_key)
```

### 6.6 Cifrado y Descifrado

El cifrado y descifrado de un mensaje en RSA se realiza con la siguiente fórmula:

- **Cifrado**: $$C = M^e \mod n$$
- **Descifrado**: $$M = C^d \mod n$$

En código, podemos implementarlo así:

```python
def encrypt_rsa(message, n, e):
    return pow(message, e, n)

def decrypt_rsa(ciphertext, n, d):
    return pow(ciphertext, d, n)

# Ejemplo de uso
n, e, d = generate_rsa_keys()
mensaje = 42
mensaje_cifrado = encrypt_rsa(mensaje, n, e)
mensaje_descifrado = decrypt_rsa(mensaje_cifrado, n, d)

print("Mensaje original:", mensaje)
print("Mensaje cifrado:", mensaje_cifrado)
print("Mensaje descifrado:", mensaje_descifrado)
```

### 6.7 Aplicaciones de RSA

El cifrado RSA es ampliamente utilizado en:

- **Seguridad en Internet**: Se usa en protocolos como **HTTPS** para cifrar la comunicación entre servidores y clientes.
- **Firmas digitales**: RSA permite autenticar la identidad de usuarios mediante **firmas digitales**, asegurando que un mensaje no haya sido alterado.
- **Correo electrónico seguro**: Herramientas como **PGP (Pretty Good Privacy)** utilizan RSA para cifrar correos electrónicos.
- **Sistemas de autenticación**: En sistemas bancarios y gubernamentales, RSA se usa para garantizar la integridad y autenticidad de los datos.

---

## 7. Conclusiones

1. **Criptografía Clásica**: Una base esencial para comprender cómo se cifraban mensajes históricamente y cómo evolucionaron los conceptos.
2. **Aritmética Modular**: Es la columna vertebral de muchos métodos criptográficos modernos. Entender sumas, multiplicaciones, inversos modulares y teoremas como Fermat y Euler es crucial para comprender RSA.
3. **RSA**: Uno de los sistemas asimétricos más extendidos. Su solidez depende de la factorización de grandes números.  
   - Generación de claves: $$(n, e)$$ y $$(n, d)$$  
   - Cifrado: $$C = M^e \mod n$$  
   - Descifrado: $$M = C^d \mod n$$  
4. **Algoritmo de Shor**: Una futura amenaza potencial para RSA y otros esquemas basados en factorizar números grandes. Con la computación cuántica, podría factorizar enteros muy grandes de forma eficiente, rompiendo la seguridad de los sistemas actuales.

---

## 8. Recursos adicionales

- **Libros**:
  - “Cryptography and Network Security” de William Stallings.
  - “Handbook of Applied Cryptography” de Menezes, van Oorschot y Vanstone.

- **Librerías y Herramientas**:
  - PyCryptodome: Implementaciones prácticas de RSA y otras primitivas criptográficas en Python.
  - OpenSSL: Herramienta de cifrado en C para generar y gestionar claves RSA, entre otras.

- **Ejemplos online**:
  - Prácticas interactivas de cifrados clásicos en sitios web educativos como dcode.fr.

**¡Y hasta aquí esta extensa y detallada introducción a la criptografía clásica, la aritmética modular y el cifrado RSA!** Esperamos que te haya ayudado a sentar las bases y a comprender la relevancia de estos temas en el contexto actual de la seguridad de la información.
