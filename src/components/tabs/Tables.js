import React from "react";
import UserDataDisplay from "./UserDataDisplay";
import customerData from "../../utils/customerData";

const list = customerData();

function Tables() {
  return <UserDataDisplay list={list} />;
}

export default Tables;
