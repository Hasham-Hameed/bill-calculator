"""
Bill Calculator
---------------
A tiny command-line tool that works out the final price of a purchase
after a percentage discount is applied.

Run it with:
    python bill_calculator.py
"""


def main():
    price = float(input("Enter price of the item: "))
    quantity = int(input("Enter quantity: "))
    discount = float(input("Enter discount percentage: "))

    total_price = price * quantity
    print("Total price before discount:", round(total_price, 2))

    discount_amount = discount * (total_price / 100)
    print("Discount amount:", round(discount_amount, 2))

    final_price = total_price - discount_amount
    print("The price after discount is:", round(final_price, 2))


if __name__ == "__main__":
    main()
