import { ProductMain, ProductRegister, ProductForm } from "./ProductStyles";

// import ImageSrc from "../../assets/post-img-example.png";

function AddProdcut() {
  return (
    <ProductMain>
      <ProductRegister>
        <ProductForm>
          <div class="product-img-register">
            <h3>이미지 등록</h3>
            <label for="productImg" class="product-img-label"></label>
          </div>
          <div class="input-container">
            <label for="productNameInput">상품명</label>
            <input
              type="text"
              id="productNameInput"
              placeholder="2~10자 이내여야 합니다."
              data-state="0"
            />
          </div>
          <div class="input-container">
            <label for="priceInput">가격</label>
            <input
              type="text"
              id="priceInput"
              placeholder="숫자만 입력 가능합니다."
              data-state="0"
            />
          </div>
          <div class="input-container">
            <label for="storeLinkInput">판매 링크</label>
            <input
              type="url"
              id="storeLinkInput"
              placeholder="URL을 입력해 주세요."
              data-state="0"
            />
          </div>
        </ProductForm>
      </ProductRegister>
    </ProductMain>
  );
}

export default AddProdcut;
