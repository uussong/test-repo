import styled from "styled-components";
import ImageSrc from "../../assets/img-button.png";

export const ProductMain = styled.main`
  display: flex;
  justify-content: center;
  min-width: 390px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin-top: 48px;
`;

export const ProductRegister = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 30px 34px 0;
`;

export const ProductForm = styled.form`
  width: 100%;

  h3 {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #767676;
    margin-bottom: 18px;
  }

  .product-img-register {
    margin-bottom: 30px;
  }
  .product-img-label {
    position: relative;
    display: block;
    width: 100%;
    height: 204px;
    background-color: #f2f2f2;
    border: 0.5 solid #dbdbdb;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
  }
  .product-img-label::after {
    position: absolute;
    right: 12px;
    bottom: 12px;
    content: "";
    width: 36px;
    height: 36px;
    background: #c4c4c4 url(${ImageSrc}) no-repeat center / 38px 38px;
    border-radius: 50%;
  }

  .input-container {
    width: 100%;
    margin-bottom: 16px;
  }

  .input-container label {
    display: block;
    color: #767676;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 10px;
  }

  .input-container input {
    width: 100%;
    font-size: 14px;
    line-height: 14px;
    padding-bottom: 8px;
    border: none;
    color: #000000;
    border-bottom: 1px solid #dbdbdb;
  }

  .input-container input::placeholder {
    color: #dbdbdb;
  }
`;
