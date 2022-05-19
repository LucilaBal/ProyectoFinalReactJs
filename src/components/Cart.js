import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr, Info, Top, TopButton, TopText, Bottom, Button, Summary, SummaryItem, SummaryTitle, SummaryItemText, SummaryItemPrice} from './StyledComponents';
import FormatNumber from "../utils/FormatNumber";
import styled from "styled-components";

import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
          id: item.idItem,
          title: item.nameItem,
          price: item.costItem,
          qty: item.qtyItem
    }));

    test.cartList.forEach(async (item) => {
      const itemRef = doc(db, "products", item.idItem);
      await updateDoc(itemRef, {
        stock: increment(-item.qtyItem)
      });
    });

    let order = {
      buyer: {
        name: "Lucila Balducci",
        email: "lucila@gmail.com",
        phone: "2211111"
      },
      total: test.calcTotal(),
      items: itemsForDB,
      date: serverTimestamp()
    };
  
    console.log(order);
    
    const createOrderInFirestore = async () => {
      // Add a new document with a generated id
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    }
  
    createOrderInFirestore()
      .then(result => alert('Su pedido ha sido creado. Por favor tome nota del ID de su pedido.\n\n\nID de orden: ' + result.id + '\n\n'))
      .catch(err => console.log(err));
  
    test.removeList();
  
  }

    return (
        <WrapperCart>
            <TitleCart>MI CARRITO</TitleCart>
            <Top>
                <Link to='/'><TopButton>IR A LA TIENDA</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}>VACIAR EL CARRITO</TopButton>
                    : <TopText>El carrito esta vacio</TopText>
                }
            </Top>
            <ContentCart>
            <Bottom>
                <h6>
                    {
                        test.cartList.length > 0 &&
                            test.cartList.map(item => 
                            <Product key={item.idItem}>
                            <ProductDetail>
                                <ImageCart src={item.imgItem} />
                                <Details>
                                <span>
                                    <b>PRODUCTO:</b> {item.nameItem}
                                </span>
                                <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>ELIMINAR</TopButton>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                <div>{item.qtyItem}PRODUCTOS</div>
                                /
                                <div>${item.costItem}</div>
                                </ProductAmountContainer>
                                <ProductPrice> ${test.calcTotalPerItem(item.idItem)} </ProductPrice>
                            </PriceDetail>
                            </Product>
                            )
                    }
                </h6>
                {
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>ORDEN DE COMPRA</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Impuestos</SummaryItemText>
                                <SummaryItemPrice style={{color:"red"}}><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Descuento</SummaryItemText>
                                <SummaryItemPrice style={{color:"green"}}><FormatNumber number={-test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button onClick={createOrder}>FINALIZAR COMPRA</Button>
                        </Summary>
                }
            </Bottom>
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;

