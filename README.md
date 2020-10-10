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

### Caution
모든 POST 요청은 다음의 헤더로 보내주셔야합니다!!  
> Content-Type: application/json

# API 명세
**프로필 (profile) 관련**
- [/api/get_profile_list](#get_profile_list)
- [/api/get_profile_detail](#get_profile_detail)
- [/api/search_profile](#search_profile)

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
{
    "state": true,
    "data": [
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
        {
            "id": "MSi9Qxu4bN7sJGNTvQOGG",
            "name": "최예진",
            "thumbnail_color": "/image/profile/MSi9Qxu4bN7sJGNTvQOGG_color.jpg",
            "thumbnail_gray": "/image/profile/MSi9Qxu4bN7sJGNTvQOGG_gray.jpg"
        }
    ]
}
```

**Description**

![get_profile_list_description](https://user-images.githubusercontent.com/50457791/95019255-372a0700-069f-11eb-8329-c7ac472c7140.png)


### get_profile_detail

**Caution**: 김수현(C5wY_m2Lj1GIc6Sl7n6Ry)은 ds 컬럼이 모두 "null"로 반환됩니다.

**URL** : `/api/get_profile_detail`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|user_id|String|프로필 상세 정보 조회를 위한 해당 졸업자의 ID|HjWispfgiPOTYc8qEVe0G|

**Result**

```json
{
    "state": true,
    "data": {
        "id": "HjWispfgiPOTYc8qEVe0G",
        "name": "김남희",
        "description": "010nh@naver.com\n010 6777 2408",
        "vd_id": "8Jdx5wlODTPBFywayxwaY",
        "vd_name": "Unimal project",
        "vd_thumbnail": "/image/thumbnail/vd/8Jdx5wlODTPBFywayxwaY.jpg",
        "acd_id": "SOfcGSM6NXtpqszVhXMZ8",
        "acd_name": "기업광고 / 이노베이션",
        "acd_thumbnail": "/image/thumbnail/acd/SOfcGSM6NXtpqszVhXMZ8.jpg",
        "ds_id": "HfiixYV2Sc7qG87vIDUPI",
        "ds_name": "디지털 타임 캡슐, EGG",
        "ds_thumbnail": "/image/thumbnail/ds/HfiixYV2Sc7qG87vIDUPI.jpg",
        "dmd_id": "8CMbfs_KVuUMKd9frg9ac",
        "dmd_name": "memory circulation",
        "dmd_thumbnail": "/image/thumbnail/dmd/8CMbfs_KVuUMKd9frg9ac.jpg"
    }
}
```

**Description**
![get_profile_detail_description](https://user-images.githubusercontent.com/50457791/95059074-5d00eb80-0733-11eb-8c91-bee3524e7cc7.png)

### search_profile
##### 입력된 이름이 포함된 졸업자의 정보를 반환합니다.

**URL** : `/api/search_profile`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|name|String|졸업자 성명|김|

**Result**

```json
{
    "state": true,
    "data": [
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
        {
            "id": "s6cyBm6On1nzn0JnEDNMV",
            "name": "김정현",
            "thumbnail_color": "/image/profile/s6cyBm6On1nzn0JnEDNMV_color.jpg",
            "thumbnail_gray": "/image/profile/s6cyBm6On1nzn0JnEDNMV_gray.jpg"
        }
    ]
}
]
```

## 게시글 (article)
### get_article_list
**URL** : `/api/get_article_list`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|type|String|게시판 타입|vd  acd  ds  dmd|

*type 항목은 다음 4가지 중 하나의 값이 전달되어야합니다.*
- vd (visual_design)
- acd (advertising_conti_design)
- ds (design_seminar)
- dmd (digital_media_design)

**Result**

```json
{
    "state": true,
    "data": [
        {
            "id": "i-gZ8LLHhodMBqzs67sRO",
            "title": "나의 12호실/ 북패키지 디자인",
            "maker": [
                "최예진"
            ],
            "thumbnail_path": "/image/thumbnail/vd/i-gZ8LLHhodMBqzs67sRO.jpg"
        },
        {
            "id": "hlNjriUudqKSUmw9iY_C3",
            "title": "U.TEA",
            "maker": [
                "천융루"
            ],
            "thumbnail_path": "/image/thumbnail/vd/hlNjriUudqKSUmw9iY_C3.jpg"
        },
        ...
        {
            "id": "8Jdx5wlODTPBFywayxwaY",
            "title": "Unimal project",
            "maker": [
                "김정현",
                "김남희",
                "이유리"
            ],
            "thumbnail_path": "/image/thumbnail/vd/8Jdx5wlODTPBFywayxwaY.jpg"
        },
    ]
}
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
{
    "state": true,
    "data": [
        {
            "id": "SOfcGSM6NXtpqszVhXMZ8",
            "title": "기업광고 / 이노베이션",
            "maker": [
                "김남희",
                "이유리"
            ],
            "img_path": "/image/webboard/acd/SOfcGSM6NXtpqszVhXMZ8.jpg",
            "has_video": false,
            "video_path": "null"
        }
    ]
}
```

### search_article
##### 입력된 이름이 포함된 작품의 정보를 반환합니다.
**URL** : `/api/search_article`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|title|String|작품 제목|보|

**Result**

```json
{
    "state": true,
    "data": [
        {
            "id": "iwJFW7BoCPWjUOqiyny1g",
            "title": "LG GRAM17/보건복지부/희망브리지 외 6작"
        },
        {
            "id": "9XjlhY1dF-6DqaQ6Kslmw",
            "title": "보보 : 펫로스증후군 극복 UI/UX"
        }
    ]
}
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
{
    "state": true,
    "data": [
        {
            "id": "UdJgThjbPMn-sImzMsjOL",
            "comment": "guest book sample 3",
            "upload_date": "2020-10-07"
        },
        {
            "id": "Z2F7Re317CtAjeFNlgatK",
            "comment": "guest book sample 2",
            "upload_date": "2020-10-07"
        },
        {
            "id": "h3M2z9uP9jmzlULZBW1Jm",
            "comment": "guest book sample 1",
            "upload_date": "2020-10-07"
        },
        {
            "id": "kHZZ5panLF6LUNtBKisYB",
            "comment": "init_data_guest_book_1",
            "upload_date": "2020-09-21"
        }
    ]
}
```

### add_guest_book

**URL** : `/api/add_guest_book`

**Method** : `POST`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|comment|String|댓글 내용|"안녕하세요"|

**Result**

```json
{
    "state": true   // true | false
}
```

## 게시글 (article_comment)
### get_article_comment

**Progress**: SOfcGSM6NXtpqszVhXMZ8 의 article에만 21개 이상의 sample이 들어있습니다.

**URL** : `/api/get_article_comment`

**Method** : `GET`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|article_id|String|게시글 ID|SOfcGSM6NXtpqszVhXMZ8|
|page|String|[option]   존재하지 않을시 1로 계산합니다|1|

**Result**

```json
{
    "state": true,
    "data": {
        "count": 21,    // 전체 댓글 개수
        "next": true,   // 다음 페이지가 존재하는지 여부
        "comments": [
            {
                "id": "4zcmP_gAkru-pHbsX-IM7",
                "comment": "sample_20",
                "uploader_name": "박지홍_20",
                "upload_date": "2020-10-05"
            },
            {
                "id": "_cW3oYhkd4Tc1eSDF-LB-",
                "comment": "sample_19",
                "uploader_name": "박지홍_19",
                "upload_date": "2020-10-05"
            },
            ...
            {
                "id": "K8rpcgm1UVspE5oGpQAl-",
                "comment": "sample_11",
                "uploader_name": "박지홍_11",
                "upload_date": "2020-10-05"
            }
        ]
    }
}
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
{
    "state": true   // true | false
}
```

### del_article_comment

**URL** : `/api/del_article_comment`

**Method** : `POST`

**Required Attribute**

|Attribute|Type|Description|Example|
|---|---|---|---|
|id|String|댓글 ID|CC8c550I3EQ5nS12dGT5P|
|article_id|Int|게시글 번호|3|
|password|Int|댓글 등록시 기입한 4자리 비밀번호|1234|

**Result**

```json
{
    "state": true   // true | false
}
```
