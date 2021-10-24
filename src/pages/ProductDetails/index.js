import React from "react";
import reactDom from "react-dom";
import moment from "moment";
import { getProducDetails } from "../../services/Api";
import { getImageProduct } from "../../shared/ultils";
import { getCommentsProduct } from "../../services/Api";
import { createCommentProduct } from "../../services/Api";
const ProductDetails = (props) => {
  const id = props.match.params.id;
  const [productDetails, setProductDetails] = React.useState(null);
  const [comments, setComments] = React.useState(null);
  const [inputComment , setInputComment] = React.useState(null)
  const getComments = (id) => {
    getCommentsProduct(id).then((res) => {
      setComments(res.data.data.docs);
    });
  };
  const onChangeInput = (e) => {
    const {name , value } = e.target;
    setInputComment({...inputComment,[name]:value})
  }
  const onSubmitInput = ()=>{
     createCommentProduct(id,inputComment,{}).then((res)=>{
       if(res.data.status == 'success'){
         //reset
         setInputComment({})
         //lấy ra comment sau khi post
         getComments(id)
       }
     })
  }
  React.useEffect(() => {
    getProducDetails(id).then((res) => {
      setProductDetails(res.data.data);
      getComments(id);
    });
  }, [id]);
  return (
    <>
      {/*	List Product	*/}
      <div id="product">
        <div id="product-head" className="row">
          <div id="product-img" className="col-lg-6 col-md-6 col-sm-12">
            <img
              src={
                productDetails?.image && getImageProduct(productDetails?.image)
              }
            />
          </div>
          <div id="product-details" className="col-lg-6 col-md-6 col-sm-12">
            <h1>{productDetails?.name}</h1>
            <ul>
              <li>
                <span>Bảo hành:</span> 12 Tháng
              </li>
              <li>
                <span>Đi kèm:</span> {productDetails?.accessories}
              </li>
              <li>
                <span>Tình trạng:</span> {productDetails?.status}
              </li>
              <li>
                <span>Khuyến Mại:</span> {productDetails?.promotion}
              </li>
              <li id="price">Giá Bán (chưa bao gồm VAT)</li>
              <li id="price-number">{productDetails?.price}đ</li>
              {productDetails?.is_stock ? (
                <li id="status">Còn hàng</li>
              ) : (
                <li id="status">Hết hàng</li>
              )}
            </ul>
            <div id="add-cart">
              <a href="#">Mua ngay</a>
            </div>
          </div>
        </div>
        <div id="product-body" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Đánh giá về {productDetails?.name}</h3>
            <p>{productDetails?.details}</p>
          </div>
        </div>
        {/*	Comment	*/}
        <div id="comment" className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h3>Bình luận sản phẩm</h3>
            <form method="post">
              <div className="form-group">
                <label>Tên:</label>
                <input
                  name="comm_name"
                  required
                  type="text"
                  onChange = {onChangeInput}
                  value = {inputComment?.name || ""}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  name="comm_mail"
                  required
                  type="email"
                  className="form-control"
                  onChange = {onChangeInput}
                  value = {inputComment?.mail || ""}
                  id="pwd"
                />
              </div>
              <div className="form-group">
                <label>Nội dung:</label>
                <textarea
                  name="comm_details"
                  required
                  rows={8}
                  className="form-control"
                  onChange = {onChangeInput}
                  value = {inputComment?.content || ""}
                  defaultValue={""}
                />
              </div>
              <button type="submit" onClick={onSubmitInput} name="sbm" className="btn btn-primary">
                Gửi
              </button>
            </form>
          </div>
        </div>
        {/*	End Comment	*/}
        {/*	Comments List	*/}
        {comments?.length && (
          <div id="comments-list" className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              {comments.map((comment) => {
                const m = moment(comment.createdAt);
                <div key={comment._id} className="comment-item">
                  <ul>
                    <li>
                      <b>{comment.name}</b>
                    </li>
                    <li>{m.fromNow()}</li>
                    <li>
                      <p>
                       {comment.content}
                      </p>
                    </li>
                  </ul>
                </div>;
              })}
            </div>
          </div>
        )}

        {/*	End Comments List	*/}
      </div>
      {/*	End Product	*/}
      <div id="pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Trang trước
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Trang sau
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ProductDetails;
