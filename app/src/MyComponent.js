import React from "react";
import { newContextComponents } from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;

export default ({ drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="App">
      <div className="section">
        <h1>AOE Decentralized Application</h1>
        <h2>Active Account</h2>
        <AccountData drizzle={drizzle} drizzleState={drizzleState} accountIndex={0} units="ether" precision={3} />
        <h2>Opponent's Account</h2>
        <AccountData drizzle={drizzle} drizzleState={drizzleState} accountIndex={1} units="ether" precision={3} />
      </div>

      <div className="section">
        <h2>Fighting lands</h2>
        <p><b>Incoming soon .... </b></p>
      </div>

      <div className="section">
        <h2>Soldiers history</h2>
        <ContractData
          drizzle={drizzle}
          drizzleState={drizzleState}
          contract="AOE"
          method="getSoldiersCount"
          render={soldierCount => {
            console.log("soldierCount" + soldierCount);
            return soldierCount > 0 ? (
              <div>
                <p>
                  Latest soldier's details :
                </p>
                <ul>
                  <li>
                    Index : {soldierCount - 1}
                  </li>
                  <li>
                    Name : <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="getSoldierName" methodArgs={[soldierCount - 1]} />
                  </li>
                  <li>
                    Type : <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="getSoldierType" methodArgs={[soldierCount - 1]} />
                  </li>
                  <li>
                    Damage : <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="getSoldierDamage" methodArgs={[soldierCount - 1]} />
                  </li>
                  <li>
                    HitPoints : <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="getSoldierHp" methodArgs={[soldierCount - 1]} />
                  </li>
                  <li>
                    Owner : <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="getSoldierOwner" methodArgs={[soldierCount - 1]} />
                  </li>
                </ul>
              </div>
            ) : (
              <div>No soldiers created yet</div>
            );
          }}
        />
      </div>

      <div className="section">
        <h2>Your soldiers</h2>
        <p>
          Available types are : <b>melee</b> ; <b>archery</b> ; <b>artillery</b>
        </p>
        <p>
          Your number of soldiers:&nbsp;
          <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourSoldiersCount" />
        </p>
        <p>
          Create a soldier for yourself !
        </p>
        <ContractForm drizzle={drizzle} contract="AOE" method="createSoldier" sendArgs={{ gas: 3000000 }} />
        <p>Your army statistics :</p>
        <p>
          <b>Melee :</b> &nbsp;<ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourMeleeCount" /> soldiers :
          <ul>
            <li>
              Damage:&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourMeleeDamage" />
            </li>
            <li>
              Hp:&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourMeleeHp" />
            </li>
          </ul>
        </p>
        <p>
          <b>Archery :</b> &nbsp;<ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArcheryCount" /> soldiers :
          <ul>
            <li>
              Damage:&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArcheryDamage" />
            </li>
            <li>
              Hp:&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArcheryHp" />
            </li>
          </ul>
        </p>
        <p>
          <b>Artillery :</b> &nbsp;<ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArtilleryCount" /> soldiers :
          <ul>
            <li>
              Damage :&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArtilleryDamage" />
            </li>
            <li>
              Hp :&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArtilleryHp" />
            </li>
          </ul>
        </p>
      </div>

      <div className="section">
        <h2>Your opponent's soldiers</h2>
        <p>
          Available types are : <b>melee</b> ; <b>archery</b> ; <b>artillery</b>
        </p>
        <p>
          Your opponent's number of soldiers:&nbsp;
          <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourSoldiersCount" methodArgs={[{ from: drizzleState.accounts[1] }]} />
        </p>
        <p>
          Create a soldier for your opponent !
        </p>
        <ContractForm drizzle={drizzle} contract="AOE" method="createSoldier" sendArgs={{ from: drizzleState.accounts[1], gas: 3000000 }} />
        <p>Your opponent's army statistics :</p>
        <p>
          <b>Melee :</b> &nbsp;<ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourMeleeCount" methodArgs={[{ from: drizzleState.accounts[1] }]} /> soldiers :
          <ul>
            <li>
              Damage:&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourMeleeDamage" methodArgs={[{ from: drizzleState.accounts[1] }]} />
            </li>
            <li>
              Hp:&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourMeleeHp" methodArgs={[{ from: drizzleState.accounts[1] }]} />
            </li>
          </ul>
        </p>
        <p>
          <b>Archery :</b> &nbsp;<ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArcheryCount" methodArgs={[{ from: drizzleState.accounts[1] }]} /> soldiers :
          <ul>
            <li>
              Damage:&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArcheryDamage" methodArgs={[{ from: drizzleState.accounts[1] }]} />
            </li>
            <li>
              Hp:&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArcheryHp" methodArgs={[{ from: drizzleState.accounts[1] }]} />
            </li>
          </ul>
        </p>
        <p>
          <b>Artillery :</b> &nbsp;<ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArtilleryCount" methodArgs={[{ from: drizzleState.accounts[1] }]} /> soldiers :
          <ul>
            <li>
              Damage :&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArtilleryDamage" methodArgs={[{ from: drizzleState.accounts[1] }]} />
            </li>
            <li>
              Hp :&nbsp;
              <ContractData drizzle={drizzle} drizzleState={drizzleState} contract="AOE" method="yourArtilleryHp" methodArgs={[{ from: drizzleState.accounts[1] }]} />
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};
