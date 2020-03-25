pragma solidity 0.5.16;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract AOE is ERC721{

    struct Soldier {
        string name;
        string typeOf;
        uint256 hp;
        uint256 damage;
        address owner;
    }

    mapping (address => uint256) soldierOwners;

    Soldier[] public soldiers;

    function createSoldier(string memory _name, string memory _type) public {
        require(compareStrings(_type, "melee") || compareStrings(_type, "archery") || compareStrings(_type, "artillery"), "Unautorized type");
        uint256 id = soldiers.length;
        string memory name = _name;
        uint256 rand = uint256(keccak256(abi.encodePacked(name)));
        string memory typeOf = _type;
        uint256 hp;
        uint256 damage;

        if(compareStrings(_type, "melee")){
            hp = 25 + rand % 15;
            damage = 3 + rand % 2;
        } else if(compareStrings(_type, "archery")){
            hp = 20 + rand % 8;
            damage = 4 + rand % 3;
        } else {
            hp = 15 + rand % 5;
            damage = 5 + rand % 4;
        }

        soldiers.push(
            Soldier(name, typeOf, hp, damage, msg.sender)
        );
        _mint(msg.sender, id);
        soldierOwners[msg.sender] += 1;
    }

    function compareStrings (string memory a, string memory b) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))) );
    }

    // Soldier getter based on index
    function getSoldierOwner(uint256 index) public view returns(address){
        require(index < soldiers.length, "This index doesn't exist.");
        return soldiers[index].owner;
    }

    function getSoldierName(uint256 index) public view returns(string memory){
        require(index < soldiers.length, "This index doesn't exist.");
        return soldiers[index].name;
    }

    function getSoldierType(uint256 index) public view returns(string memory){
        require(index < soldiers.length, "This index doesn't exist.");
        return soldiers[index].typeOf;
    }

    function getSoldierHp(uint256 index) public view returns(uint256){
        require(index < soldiers.length, "This index doesn't exist.");
        return soldiers[index].hp;
    }

    function getSoldierDamage(uint256 index) public view returns(uint256){
        require(index < soldiers.length, "This index doesn't exist.");
        return soldiers[index].damage;
    }

    function getSoldiersCount() public view returns(uint256){
        return soldiers.length;
    }

    function yourSoldiersCount() public view returns(uint256){
        uint256 count = 0;
        for(uint i = 0; i < soldiers.length; i++){
            if(soldiers[i].owner == msg.sender){
                count++;
            }
        }
        return count;
    }

    // Getters for your melee soldiers
    function yourMeleeCount() public view returns(uint256){
        uint256 count = 0;
        for(uint i = 0; i < soldiers.length; i++){
            if(compareStrings(soldiers[i].typeOf, "melee") && soldiers[i].owner == msg.sender){
                count++;
            }
        }
        return count;
    }

    function yourMeleeDamage() public view returns(uint256){
        uint256 damage = 0;
        for(uint i = 0; i < soldiers.length; i++){
            if(compareStrings(soldiers[i].typeOf, "melee") && soldiers[i].owner == msg.sender){
                damage += soldiers[i].damage;
            }
        }
        return damage;
    }

    function yourMeleeHp() public view returns(uint256){
        uint256 hp = 0;
        for(uint i = 0; i < soldiers.length; i++){
            if(compareStrings(soldiers[i].typeOf, "melee") && soldiers[i].owner == msg.sender){
                hp += soldiers[i].hp;
            }
        }
        return hp;
    }

    // Getters for your archery soldiers
    function yourArcheryCount() public view returns(uint256){
        uint256 count = 0;
        for(uint i = 0; i < soldiers.length; i++){
            if(compareStrings(soldiers[i].typeOf, "archery") && soldiers[i].owner == msg.sender){
                count++;
            }
        }
        return count;
    }

    function yourArcheryDamage() public view returns(uint256){
        uint256 damage = 0;
        for(uint i = 0; i < soldiers.length; i++){
            if(compareStrings(soldiers[i].typeOf, "archery") && soldiers[i].owner == msg.sender){
                damage += soldiers[i].damage;
            }
        }
        return damage;
    }

    function yourArcheryHp() public view returns(uint256){
        uint256 hp = 0;
        for(uint i = 0; i < soldiers.length; i++){
            if(compareStrings(soldiers[i].typeOf, "archery") && soldiers[i].owner == msg.sender){
                hp += soldiers[i].hp;
            }
        }
        return hp;
    }

    // Getters for your artillery soldiers
    function yourArtilleryCount() public view returns(uint256){
        uint256 count = 0;
        for(uint i = 0; i < soldiers.length; i++){
            if(compareStrings(soldiers[i].typeOf, "artillery") && soldiers[i].owner == msg.sender){
                count++;
            }
        }
        return count;
    }

    function yourArtilleryDamage() public view returns(uint256){
        uint256 damage = 0;
        for(uint i = 0; i < soldiers.length; i++){
            if(compareStrings(soldiers[i].typeOf, "artillery") && soldiers[i].owner == msg.sender){
                damage += soldiers[i].damage;
            }
        }
        return damage;
    }

    function yourArtilleryHp() public view returns(uint256){
        uint256 hp = 0;
        for(uint i = 0; i < soldiers.length; i++){
            if(compareStrings(soldiers[i].typeOf, "artillery") && soldiers[i].owner == msg.sender){
                hp += soldiers[i].hp;
            }
        }
        return hp;
    }
}