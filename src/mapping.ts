import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  InstanceAdded as InstanceAddedEvent,
  InstanceRemoved as InstanceRemovedEvent,
  Transfer as TransferEvent,
  AlchemistCrucible as AlchemistCrucibleContract
} from "../generated/AlchemistCrucible/AlchemistCrucible"
import {
  Approval,
  ApprovalForAll,
  InstanceAdded,
  InstanceRemoved,
  Token,
  User
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleInstanceAdded(event: InstanceAddedEvent): void {
  let entity = new InstanceAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.instance = event.params.instance
  entity.save()
}

export function handleInstanceRemoved(event: InstanceRemovedEvent): void {
  let entity = new InstanceRemoved(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.instance = event.params.instance
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    token = new Token(event.params.tokenId.toString());
    token.creator = event.params.to.toHexString();
    token.tokenID = event.params.tokenId;

    let alchemistCrucibleContract = AlchemistCrucibleContract.bind(event.address);
    token.contentURI = alchemistCrucibleContract.tokenURI(event.params.tokenId);
  }
  token.owner = event.params.to.toHexString();
  token.save();

  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}
