# Express Module 적용 및 실행방법
### Installation
```yarn```
### Run
```npm start```
### Link
- 3000번 포트는 react-server-router로 직접 라우팅됩니다.
- 4000번 포트는 node로 라우팅되며 이후 내부적으로 react-server-router로 라우팅됩니다.

**따라서 4000번 포트로만 API 호출이 가능합니다.**

**대외적으로는 4000번 포트로 호스팅해야합니다.**

**4000번 포트로 서비스를 테스트해주세요!!**

# API 명세
**프로필 (profile) 관련**
- [/api/get_profile_list](#get_profile_list)
- [/api/search_profile](#search_profile)
- [/api/get_profile_detail](#get_profile_detail)

**게시글 (article) 관련**
- [/api/get_article_list](#get_article_list)
- [/api/get_article_detail](#get_article_detail)
- [/api/search_article](#search_article)

**방명록(guest_book) 관련**
- [/api/get_guest_book](#get_guest_book)
- [/api/add_guest_book](#add_guest_book)
- [/api/del_guest_book](#del_guest_book)

**게시글 댓글 (article_comment) 관련**
- [/api/get_article_comment](#get_article_comment)
- [/api/add_article_comment](#add_article_comment)
- [/api/del_article_comment](#del_article_comment)


## 프로필 (profile)
### get_profile_list

**URL** : `/api/get_profile_list`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|-|-|-|-|

**Result**

```json
[
    {
        "id": "HjWispfgiPOTYc8qEVe0G",
        "name": "김남희",
        "thumbnail_color": "/image/profile/HjWispfgiPOTYc8qEVe0G_color.jpg",
        "thumbnail_gray": "/image/profile/HjWispfgiPOTYc8qEVe0G_gray.jpg"
    },
    {
        "id": "C5wY_m2Lj1GIc6Sl7n6Ry",
        "name": "김수현",
        "thumbnail_color": "/image/profile/C5wY_m2Lj1GIc6Sl7n6Ry_color.jpg",
        "thumbnail_gray": "/image/profile/C5wY_m2Lj1GIc6Sl7n6Ry_gray.jpg"
    },
    ...
]
```

**Description**

![get_profile_list_description](https://user-images.githubusercontent.com/50457791/95018881-4019d900-069d-11eb-8e24-b4faf14e93f1.png)


### get_profile_detail

**URL** : `/api/get_profile_detail`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|user_id|String|프로필 상세 정보 조회를 위한 해당 졸업자의 ID|HjWispfgiPOTYc8qEVe0G|

**Result**

```json
[
    {
        "id": "zVQ85_ij3dM0U5k7PmfQi",
        "name": "유재석",
        "description": "유재석 졸업생에 대한 설명입니다.",
        "thumbnail_path": "/imgs/profile_1.jpg"
작성예저어어엊어정정,
    }
    ...
]
```

### search_profile
##### 입력된 이름이 포함된 졸업자의 정보를 반환합니다.

**URL** : `/api/search_profile`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|name|String|졸업자 성명|하|

**Result**

```json
[
    {
        "id": "s6cyBm6On1nzn0JnEDNMV",
        "name": "정준하",
        "description": "정준하 졸업생에 대한 설명입니다.",
        "thumbnail_path": "/imgs/profile_4.jpg"
    },
    {
        "id": "ps13PokZwrIoQQgp2ZDgu",
        "name": "하하",
        "description": "하하 졸업생에 대한 설명입니다.",
        "thumbnail_path": "/imgs/profile_5.jpg"
    },
    ...
]
```

## 게시글 (article)
### get_article_list
**URL** : `/api/get_article_list`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|type|String|게시판 타입|visual_design  advertising_conti_design  design_seminar  digital_media_design|

*type 항목은 다음 4가지 중 하나의 값이 전달되어야합니다.*
- visual_design
- advertising_conti_design
- design_seminar
- digital_media_design

**Result**

```json
[
    {
        "id": "SOfcGSM6NXtpqszVhXMZ8",
        "title": "init_data_article_visual_design_title_1",
        "maker": "박지홍",
        "thumbnail_path": "/imgs/profile_1.jpg"
    },
    {
        "id": "M7SD0HhvhaqJMBssI9xQX",
        "title": "노홍철",
        "maker": "노홍철 졸업생에 대한 설명입니다.",
        "thumbnail_path": "/imgs/profile_2.jpg"
    },
    ...
]
```
### get_article_detail
**URL** : `/api/get_article_detail`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|article_id|String|게시글 ID|SOfcGSM6NXtpqszVhXMZ8|

**Result**

```json
[
    {
        "id": "SOfcGSM6NXtpqszVhXMZ8",
        "title": "init_data_article_visual_design_title_1",
        "maker": "박지홍",
        "img_path": "/imgs/article_1_original.jpg"
    }
]
```

### search_article
##### 입력된 이름이 포함된 작품의 정보를 반환합니다.
**URL** : `/api/search_article`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|title|String|작품 제목|init_data_article_visual_design_title_5|

**Result**

```json
[
    {
        "id": "iM7bGyJvO-6AoiY1cEOTl",
        "title": "init_data_article_visual_design_title_1",
        "maker": "박지홍",
        "thumbnail_path": "/imgs/article_5_thumbnail.jpg"
    }
]
```

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
True | False
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
True | False
```

## 게시글 (article_comment)
### get_article_comment

**URL** : `/api/get_article_comment`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|article_id|String|게시글 ID|SOfcGSM6NXtpqszVhXMZ8|

**Result**

```json
[
    {
        "id": "Ihi4vLLfPRC6PwrbcDkuh",
        "comment": "작품이 엄청나시네요!",
        "uploader_name": "박지홍",
        "upload_date": "2020-09-05"
    },
    {
        "id": "CC8c550I3EQ5nS12dGT5P",
        "comment": "영혼과 정성이 느껴집니다",
        "uploader_name": "박지홍",
        "upload_date": "2020-09-05"
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
True | False
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
True | False
```
