# Express Module 적용 및 실행방법
### Installation
```yarn```
### Run
```npm start```

# API 명세
**방명록(guest_book) 관련**
- [/api/get_guest_book](#get_guest_book)
- [/api/add_guest_book](#add_guest_book)
- [/api/del_guest_book](#del_guest_book)

**게시글 댓글 (article_comment) 관련**
- [/api/get_article_comment](#get_article_comment)
- [/api/add_article_comment](#add_article_comment)
- [/api/del_article_comment](#del_article_comment)


## 방명록 (guest_book)
### get_guest_book

**URL** : `/api/get_guest_book`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|-|-|-|-|

**Result**

```json
[
    {
        "id": "cS56QPF_wHG1WigDrBIo3",
        "comment": "안녕하세요~",
        "uploader_name": "박지홍"
    },
    {
        "id": "cS56QPF_wHG1WigDrBIo3",
        "comment": "안녕안녕~~",
        "uploader_name": "박지홍"
    },
    ...
]
```

### add_guest_book

**URL** : `/api/add_guest_book`

**Method** : `POST`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|comment|String|댓글 내용|"안녕하세요"|
|uploader_name|String|댓글 작성자 이름|"박지홍"|
|password|Int|댓글 삭제시 요구될 4자리 비밀번호|1234|

**Result**

```json
Success | Fail
```

### del_guest_book

**URL** : `/del/add_guest_book`

**Method** : `POST`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|id|String|댓글 고유 id|Ihi4vLLfPRC6PwrbcDkuh|
|password|Int|댓글 등록시 기입한 4자리 비밀번호|1234|

**Result**

```json
Success | Fail
```

## 게시글 (article_comment)
### get_article_comment

**URL** : `/api/get_article_comment`

**Method** : `POST`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|article_id|Int|게시글 아이디|1|

**Result**

```json
[
    {
        "id": "Ihi4vLLfPRC6PwrbcDkuh",
        "comment": "작품이 엄청나시네요!",
        "uploader_name": "박지홍"
    },
    {
        "id": "CC8c550I3EQ5nS12dGT5P",
        "comment": "영혼과 정성이 느껴집니다",
        "uploader_name": "박지홍"
    }, 
    ...
]
```

### add_article_comment

**URL** : `/api/add_article_comment`

**Method** : `POST`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|article_id|String|게시글 아이디|CC8c550I3EQ5nS12dGT5P|
|comment|String|댓글 내용|안녕하세요|
|uploader_name|String|댓글 작성자 이름|박지홍|
|password|Int|댓글 삭제시 요구될 4자리 비밀번호|1234|

**Result**

```json
Success | Fail
```

### del_article_comment

**URL** : `/del/del_article_comment`

**Method** : `POST`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|id|String|댓글 ID|CC8c550I3EQ5nS12dGT5P|
|article_id|Int|게시글 번호|3|
|password|Int|댓글 등록시 기입한 4자리 비밀번호|1234|

**Result**

```json
Success | Fail
```