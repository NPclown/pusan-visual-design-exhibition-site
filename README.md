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

**Progress**: 입력한 user_id에 대해 id, name, description을 제외한 컬럼은 같은 값이 출력됩니다.


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
        "vd_id": "SOfcGSM6NXtpqszVhXMZ8",
        "vd_name": "sample_article_1",
        "vd_thumbnail": "/image/article/article_1_thumbnail.jpg",
        "acd_id": "IUYkBnytp6GoVeTLswq9G",
        "acd_name": "sample_article_2",
        "acd_thumbnail": "/image/article/article_2_thumbnail.jpg",
        "ds_id": "OmCnmh1QNPdcqi4MmYQPQ",
        "ds_name": "sample_article_3",
        "ds_thumbnail": "/image/article/article_3_thumbnail.jpg",
        "dmd_id": "5v4bdO2qqYVfMBjrLz_wi",
        "dmd_name": "sample_article_4",
        "dmd_thumbnail": "/image/article/article_4_thumbnail.jpg"
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
|type|String|게시판 타입|visual_design  advertising_conti_design  design_seminar  digital_media_design|

*type 항목은 다음 4가지 중 하나의 값이 전달되어야합니다.*
- visual_design
- advertising_conti_design
- design_seminar
- digital_media_design

**Result**

```json
{
    "state": true,
    "data": [
        {
            "id": "SOfcGSM6NXtpqszVhXMZ8",
            "title": "sample_article_1",
            "maker": "김남희",
            "thumbnail_path": "/image/article/article_1_thumbnail.jpg"
        },
        {
            "id": "iM7bGyJvO-6AoiY1cEOTl",
            "title": "init_data_article_visual_design_title_5",
            "maker": "김수현",
            "thumbnail_path": "/imgs/article_5_thumbnail.jpg"
        },
        {
            "id": "oLA9ji6mWnqIyc1XLOHm5",
            "title": "init_data_article_visual_design_title_6",
            "maker": "김수현",
            "thumbnail_path": "/imgs/article_6_thumbnail.jpg"
        }
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
            "title": "sample_article_1",
            "maker": "김남희",
            "img_path": "/image/article/article_1_original.jpg"
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
|title|String|작품 제목|sample|

**Result**

```json
{
    "state": true,
    "data": [
        {
            "id": "SOfcGSM6NXtpqszVhXMZ8",
            "title": "sample_article_1",
            "thumbnail_path": "/image/article/article_1_thumbnail.jpg"
        },
        {
            "id": "IUYkBnytp6GoVeTLswq9G",
            "title": "sample_article_2",
            "thumbnail_path": "/image/article/article_2_thumbnail.jpg"
        },
        {
            "id": "OmCnmh1QNPdcqi4MmYQPQ",
            "title": "sample_article_3",
            "thumbnail_path": "/image/article/article_3_thumbnail.jpg"
        },
        {
            "id": "5v4bdO2qqYVfMBjrLz_wi",
            "title": "sample_article_4",
            "thumbnail_path": "/image/article/article_4_thumbnail.jpg"
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
{
    "state": true   // true | false
}
```
