// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.7;

contract demo {
    uint number;

    function setnumber(uint _number) public {
        number = _number;
    }

    function getnumber() public view returns(uint){
        return number;
    }
}
