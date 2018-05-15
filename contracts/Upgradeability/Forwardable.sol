pragma solidity ^0.4.23;


contract Forwardable {
    /**
    * @dev Performs a delegatecall and returns whatever the delegatecall returned (entire context execution will return!)
    * @param _dst Destination address to perform the delegatecall
    */
    function delegatedFwd(address _dst) internal {
        assembly {
            let ptr := mload(0x40)
            calldatacopy(ptr, 0, calldatasize)

            let result := delegatecall(gas, _dst, ptr, calldatasize, 0, 0)

            let size := returndatasize
            returndatacopy(ptr, 0, size)

            switch result
                case 0 {revert(ptr, size)}
                default {return (ptr, size)}
        }
    }
}