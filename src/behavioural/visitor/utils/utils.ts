import { TaxVisitorProtocol } from '../interfaces/tax-visitor-protocol';
import { VisitableProduct } from '../visitables/visitable-product';

export function breakLine() {
  console.log('');
}

export function getNames(visitable: VisitableProduct): string {
  return visitable.getName();
}

export function getTotalPriceDetail(
  visitable: VisitableProduct,
  visitor: TaxVisitorProtocol,
): string {
  const purePrice = visitable.getPrice();
  const taxPrice = visitable.getPriceWithTaxes(visitor) - purePrice;
  const textDetail = `(${purePrice} + ${taxPrice})`;

  return textDetail;
}
