import React from "react";
import {
  TitleBadge,
  Container,
  WrapperTopTitles,
  TopTitles,
  WrapperItems,
  Item,
  ButtonMore
} from "./Style";

const TableCustomerDash = () => {
  return (
    <Container>
      <TitleBadge>Top Customers</TitleBadge>
      <WrapperTopTitles>
        <TopTitles>User</TopTitles>
        <TopTitles>Total Orders</TopTitles>
        <TopTitles>Total Spending</TopTitles>
      </WrapperTopTitles>
      <WrapperItems>
        <Item>wael masri</Item>
        <Item>25</Item>
        <Item color="red">$255</Item>
      </WrapperItems>
      <WrapperItems>
        <Item>wael masri</Item>
        <Item>25</Item>
        <Item color="red">$255</Item>
      </WrapperItems>
      <WrapperItems>
        <Item>wael masri</Item>
        <Item>25</Item>
        <Item color="red">$255</Item>
      </WrapperItems>
      <WrapperItems>
        <Item>wael masri</Item>
        <Item>25</Item>
        <Item color="red">$255</Item>
      </WrapperItems>
      <WrapperItems>
        <Item>wael masri</Item>
        <Item>25</Item>
        <Item color="red">$255</Item>
      </WrapperItems>
      <WrapperItems>
        <Item>wael masri</Item>
        <Item>25</Item>
        <Item color="red">$255</Item>
      </WrapperItems>
      <ButtonMore>
        Show All
      </ButtonMore>
    </Container>
  );
};

export default TableCustomerDash;
