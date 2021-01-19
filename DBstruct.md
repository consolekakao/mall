회원정보테이블
> user_index int 인덱스
> user_id varchar(30) 아이디
> user_pw varchar(100) 패스워드
> user_grade varchar(20) 등급
> user_name varchar(20) 이름
> user_birth varchar(30) 생년월일
> user_sex varchar(5) 성별
> user_phone varchar(30) 연락처
> user_email varchar(50) 이메일
> user_smssend bool SMS수신허용여부
> user_emailsend bool EMAIL 수신허용 여부
> user_address varchar(200) 도로명주소
> user_post varchar(10) 우편번호
> user_point int 포인트
> user_buycount int 누적주문횟수
> user_buymoney int 누적주문금액 
> user_joinday time 가입일자
> user_lastday time 최근접속일
> user_ip varchar(20) 아이피

게시판테이블
> board_idx int 인덱스
> board_type varchar(5) 게시판분류
> board_title varchar(200) 제목
> board_contents text 내용
> board_id varchar(30) 작성자ID
> board_name varchar(20) 작성자이름
> board_time datetime 작성시간
> board_view int 조회수
> board_public bool 공개여부
> board_password varchar(10) 게시글비밀번호

답글테이블
> reply_idx int 인덱스
> reply_number int 게시글idx
> reply_contents varchar(300) 내용
> reply_writer 작성자ID
> reply_name 작성자이름

리뷰테이블
> review_idx int 인덱스
> review_item_num int 리뷰상품인덱스
> review_star int 별점
> review_contents varchar(300) 상품평
> review_visible bool 리뷰숨기기 0:visible, 1:not visible
> review_time datetime 리뷰작성시간


쿠폰테이블
> cp_num int 쿠폰넘버 Auto incre
> cp_name varchar(50) 쿠폰넘버
> cp_imgurl varchar(50) 쿠폰이미지URL
> cp_imgname 쿠폰이미지확장자
> cp_freedely 무료배송여부
> cp_startdate date 쿠폰유효기간시작
> cp_enddate date 쿠폰유효기간끝
> cp_havedate date 쿠폰발급일
> cp_minsale int 최소결제금액
> cp_maxsale 최대할인금액
> cp_memo varchar(30) 기타메모


상품테이블
> item_idx int 상품인덱스
> item_code varchar(20) 자체상품코드명
> item_category_a varchar(15) 분류1
> item_category_b varchar(15) 분류2
> item_category_c varchar(15) 분류3
> item_name varchar(50) 상품명
> item_oroginal_price int 상품원가
> item_consumer_price int 상품소비자가
> item_sell_price int 상품최종판매가
> item_count int 상품재고수량
> item_memo int 관리자용 상품표시메모
> item_visible 상품진열여부
> item_sell 상품판매여부
> item_order_monney 배송비
> item_search_keyword 상품검색키워드
> item_minorder_count 상품최소주문수량
> item_orderinfo_1 (text) 상품 주문시 고지사항1
> item_orderinfo_2 (text) 상품 주문시 고지사항2
> item_orderinfo_3 (text) 상품 주문시 고지사항3
> item_orderinfo_4 (text) 상품 주문시 고지사항4

주문내역
> order_idx int 주문번호
> order_item_idx int 주문상품인덱스
> order_item_price int 개당가격
> order_item_count int 상품개수
> order_item_total_price int 상품 총가격