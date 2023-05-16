const subData = {
    list: `
    <main class="main">
    <div class="inner">
        <div class="tit_warp">
            <div class="cat">{{$store.state.cat}}/ 추천 컬렉션</div>
            <h2 class="tit">{{$store.state.cat}} 신상품</h2>
        </div>
        <div class="cont">
            <div class="search_wrap">
                <div class="left_filter">필터</div>
                <div class="right_fliter_opt">
                    <span class="default">정렬기준</span>
                    <select name="norm" id="norm">
                        <option value="new">신상품순</option>
                        <option value="popular">인기상품순</option>
                        <option value="expen">높은가격순</option>
                        <option value="cheap">낮은가격순</option>
                    </select>
                </div>
            </div>
            <h3 class="cat_tit">Polo Ralph Lauren</h3>
            <div class="list" id="list">
                <ul>
                    <li v-for="(value, name) in $store.state.gen.prod">
                        <img class="front_img" v-bind:src="'./img/'+$store.state.catEn+'/prod/'+value['idx']+'.jpg'" v-bind:alt="'product'+value['img']" />
                        <img ref="tgi" class="behind_img"
                        :src="'./img/'+$store.state.catEn+'/prod-1/alt'+value['idx']+'.jpg'" 
                        @click.prevent="chkNum(value)"alt="" />
                        <div class="brand">{{value["brand"]}}</div>
                        <div class="name">{{value["name"]}}</div>
                        <div class="price">￦{{value["price"]}}</div>
                        <div class="new" v-if="value['new'] ==1">New Arrival</div>
                    </li>
                </ul>
            </div>
            <div class="total">
                <h4>1-8/20아이템</h4>
            </div>
            <div class="result_wrap">
                <a href="#" class="more_item">더보기</a>
                <a href="#" class="whole_item">전체보기</a>
            </div>
        </div>
    </div>
    <div class="product_wrap" >
        <a href="#" class="close_btn"><i class="fa-sharp fa-solid fa-xmark"></i></a>
        <div class="product_detail" v-for="(value, name) in $store.state.gen.prod" 
        v-if="value['idx']==$store.state.imgnum">
            <div class="inner">
                <div class="product_img_wrap">
                    <ul>
                        <li>
                            <img v-bind:src="'./img/'+$store.state.catEn+'/prod/'+value['idx']+'.jpg'" alt="" />
                        </li>
                        <li>
                            <img v-bind:src="'./img/'+$store.state.catEn+'/prod-1/alt'+value['idx']+'.jpg'" alt="" />
                        </li>
                    </ul>
                </div>
                <div class="product_info_wrap">
                    <ul class="product_info">
                        <li>
                            <h1 class="logo">Ralph Lauren{{$store.state.imgnum}}</h1>
                        </li>
                        <li>
                            <span class="pro_cate pro">브랜드</span>
                            <span>{{value["brand"]}}</span>
                        </li>
                        <li>
                            <span class="pro_tit pro">상품명 : </span>
                            <span>{{value["name"]}}</span>
                        </li>
                        <li>
                            <span class="pro_price pro">판매가 : </span>
                            <span>￦ {{value["price"]}}</span>
                        </li>
                        <li>
                            <span class="pro_size pro">사이즈 : </span>
                            <span>{{value["size"]}}</span>
                        </li>
                        <li>
                            <a href="#" class="basket">장바구니에 추가</a>
                        </li>
                        <li>
                            <p class="explain">{{value["detail"]}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</main>
    `,
    detail:`
    <div class="product_detail" v-for="(value, name) in $store.state.men.polo">
            <div class="inner">
                <div class="product_img_wrap">
                    <ul>
                        <li>
                            <img v-bind:src="'./img/men/poloShirts/'+value['img']+'.jpg'" alt="" />
                        </li>
                        <li>
                            <img v-bind:src="'./img/men/poloShirts-1/alt'+value['img']+'.jpg'" alt="" />
                        </li>
                    </ul>
                </div>
                <div class="product_info_wrap">
                    <ul class="product_info">
                        <li>
                            <h1 class="logo">Ralph Lauren</h1>
                        </li>
                        <li>
                            <h3 class="pro_cate">{{value["brand"]}}</h3>
                        </li>
                        <li>
                            <h3 class="pro_tit">{{value["name"]}}</h3>
                        </li>
                        <li>
                            <h3 class="pro_price">{{value["price"]}}</h3>
                        </li>
                        <li>
                            <h3 class="pro_size">사이즈</h3>
                        </li>
                        <li>
                            <h3 class="pro_cnt">갯수</h3>
                        </li>
                        <li>
                            <h3 class="pro_sum_price">총가격</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
};

export default subData;
