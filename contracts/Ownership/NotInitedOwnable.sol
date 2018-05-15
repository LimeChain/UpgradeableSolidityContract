pragma solidity ^0.4.23;


/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */
contract NotInitedOwnable {
    address public owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(msg.sender == owner, "Sender is not an owner");
        _;
    }

    /**
     * @dev Throws if called when the owner has not been set yet.
     */
    modifier ownerSet() {
        require(owner != address(0), "Contract does not has owner");
        _;
    }

    /**
     * @dev Allows the current owner to transfer control of the contract to a newOwner.
     * @param newOwner The address to transfer ownership to.
     */
    function transferOwnership(address newOwner) public ownerSet onlyOwner  {
        require(newOwner != address(0), "newOwner address is 0");
        OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}