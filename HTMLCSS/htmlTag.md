# Sementic HTML Tag #

**Sementic하게** html을 작성해야 한다. (SEO 관점 + 코드 유지보수 등)

## 강조(Emphasis) Tag ##

+ em or strong의 사용은 자유롭게
+ seo 관점에서 사용하는 것

**Example Code :**
```html
<strong>두껍게</strong>
<em>기울기</em>
```
#

## 링크(Anchor) Tag ##

a 태그에서 href란 ?

hypertext reference : **주소** or 참조
  + URL : href="www.naver.com"
  + Page : href="./index2.html"
  + id : href = "#watchthis"
  + mail : href = "mailto:~~"
  + tel : href = "tel:~~"

> target="_black" -> 새창으로 열기

```html
  <a href="mailto:6539305@gmail.com">
    이메일 보내기
  </a>
  <a href="tel:01056289304">
    전화걸기
  </a>
  <a href="www.naver.com" target="_blank">
    네이바
  </a>
  <a href="#watchthis">
    watchthis로 이동
  </a>
```

#

## 이미지(Img) Tag ##

img 태그에서 alt란 ?

alt(alternative text) : 이미지 대체 텍스트
  + 네트워크가 느릴때 텍스트로 어떤 이미지인지 확인이 가능
  + 앞을 보지못하는 사용자를 위한 Screen Reader 도구 사용 시에 이미지 설명이 가능

**Example Code :**
```html
<img alt="~~">
```

#

## 리스트(List) Tag ##

기본 리스트 (직계 자식 요소는 li 태그만 와야한다.)
+ ol(ordered list) : 순서가 중요한 리스트
+ ul(unordered list) : 순서가 중요하지 않은 리스트

**Example Code :**
```html
<ul>
  <li>
    1
  </li>
  <li>
    2
  </li>
</ul>
```

정의 리스트 (key-value로 정보를 제공할 때 사용, 직계 자식 요소는 div, dt, dd 태그만 와야한다.)
+ dl(description list) : key = dt 태그 , value = dd 태그로 이루어져 있음

**Example Code :**
```html
<dl>
  <dt>
    과일
  </dt>
  <dd>
    과일은 맛있다.
  </dd>
</dl>
```

#

## 인용(quotations) Tag ##

+ blockquote : 인용구 > 더 많이 사용함
+ q : 문자안에서 인용("" 쿼테이션 생김)

**Example Code :**
```html
<blockquote cite="https://edu.goorm.io">
    우리가 겪을 수 있는 가장 아름다운 체험은 신비다. <br>
    신비는 모든 참 예술과 과학의 근원이다.
    <cite>- 알버트 아인슈타인</cite>
  </blockquote>

  <blockquote cite="https://bit.ly/2mvSYrT">
    <p>
      The study is the first to project the long-term outlook for Antarctica's largest penguins, which can grow 1.2
      meters
      (four ft) tall, seeking to fill a gap in understanding climate change and wildlife in one of the remotest parts of
      the planet.
    </p>

    <p>
      Overall, numbers were set to fall by at least 19 percent from current levels by 2100 as sea ice melts. And
      two-thirds of colonies of the birds, which have distinctive golden head patches, would decline by more than half,
      it
      said.
    </p>
    <p>
      <q>It's not happy news for the emperor penguin</q>, said Hal Castellan of the U.S. Woods Hole Oceanographic
      Institution,
      a co-author of the study in the journal Nature Climate Change.
    </p>
    <cite>
      “Emperor Penguin Population to Slide Due to Climate Change”, Scientific American, June 29, 2014,
    </cite>
  </blockquote>
```

#

## Input Tag ##

input tag의 타입


```html
<input type="text" minlength="5" maxlength="10" required placeholder="아이디" />
<input type="email" placeholder="이메일" />
<input type="password" minlength="6" maxlength="12" placeholder="비밀번호" />
<input type="number" min="12" max="122" placeholder="만 나이" />
<input type="file" accept=".png, .jpg" />
```

#

## Form Tag ##


**Example Code :**
```html
<form action="ref" method="POST|GET">
```

#

## audio / video / iframe Tag ##

**Example Code :**
```html
<audio src="./root.mp3" loop autoplay controls> </audio>

  <audio>
    <source src="./root.wav" type="audio/wav" />
    <source src="./root.mp3" type="audio/mp3" />
    <source src="./root.ogg" type="audio/ogg" />
    <p>
      모든 확장자를 지원하지 않는다면 이 문구가 보입니다.
    </p>
  </audio>

  <video src="./root.mp3" loop autoplay controls> </video>

  <video>
    <source src="./root.mov" type="video/mov" />
    <source src="./root.mp3" type="video/mp3" />
    <p>
      모든 확장자를 지원하지 않는다면 이 문구가 보입니다.
    </p>
  </video>

  <iframe>
    embed 할 html (공유 링크 등으로 생성)
  </iframe>
```

#

## abbr Tag ##

약어 태그

**Example Code :**
```html
<p>
  이 병은 <abbr title="Attention Deficit Hyperactivity Disorder">ADHD</abbr> 이다.
</p>
```

#

## address Tag ##

연락망 표시 태그 ( 주소 or 연락처 or URL or Email or SNS)

**Example Code :**
```html
<address>
  <h1>김정현</h1>
  <a href="https://github.com/task11">github</a>
</address>
```

#

## pre / code Tag ##

indentation이나 띄워쓰기가 가능한 textarea

**Example Code :**
```html
<pre>
  <code>
    var name = '김정현';
    if(name === '김정현'){
      console.log('hi');
    }
  </code>
</pre>
```