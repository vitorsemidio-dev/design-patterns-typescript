import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuilderFacade {
  private readonly mainDishBuilder: MainDishBuilder = new MainDishBuilder();
  private readonly veganDishBuilder: VeganDishBuilder = new VeganDishBuilder();

  public makeMeal1() {
    this.mainDishBuilder.makeBeverage().makeMeal();
    const mainMealBox1 = this.mainDishBuilder.getMealBox();
    console.log(
      mainMealBox1,
      mainMealBox1.getPrice(),
      this.mainDishBuilder.getPrice(),
    );
  }
  public makeMeal2() {
    this.mainDishBuilder.reset();
    this.mainDishBuilder.makeBeverage().makeMeal().makeDessert();
    const mainMealBox2 = this.mainDishBuilder.getMealBox();
    console.log(
      mainMealBox2,
      mainMealBox2.getPrice(),
      this.mainDishBuilder.getPrice(),
    );
  }
  public makeMeal3() {
    this.veganDishBuilder.makeMeal().makeBeverage();
    const mainVeganDish = this.veganDishBuilder.getMealBox();
    console.log(
      mainVeganDish,
      mainVeganDish.getPrice(),
      this.veganDishBuilder.getPrice(),
    );
  }
}
