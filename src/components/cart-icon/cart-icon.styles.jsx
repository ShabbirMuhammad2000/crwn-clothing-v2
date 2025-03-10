import styled from 'styled-components'


export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        width: 24px;
        height: 24px;
    }
`

export const ItemCount = styled.div`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`

// export const shoppingIcon = styled.div`
//     width: 24px;
//     height: 24px;
// `
// .cart-icon-container {
//     width: 45px;
//     height: 45px;
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;

//     .shopping-icon {
//         width: 24px;
//         height: 24px;
//     }
//     .item-count {
//         position: absolute;
//         font-size: 10px;
//         font-weight: bold;
//         bottom: 12px;
//     }
// } 
