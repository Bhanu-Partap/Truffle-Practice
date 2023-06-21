// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.7;

contract demo {
    uint public number;

    function setnumber(uint _number) public returns(uint){
        number = _number;
        return _number;
    }
}
//     function getnumber() public view returns(uint){
//         return number;
//     }
// }
