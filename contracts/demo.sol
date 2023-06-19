// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Demo {
    uint number;

    function setnumber(uint _number) public {
        number = _number;
    }

    function getnumber() public returns(uint){
        return number;
    }
}
