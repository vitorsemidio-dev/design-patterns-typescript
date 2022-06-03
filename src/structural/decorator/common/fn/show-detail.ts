interface BaseProtocol {
  getName(): string;
  getPrice(): number;
}

export function showDetail(protocol: BaseProtocol) {
  console.log(`Name: ${protocol.getName()} - Price: ${protocol.getPrice()}`);
}
