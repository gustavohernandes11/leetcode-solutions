defmodule Solution do
  @spec plus_one(digits :: [integer]) :: [integer]
  def plus_one(digits) do
    last_index = length(digits) - 1
    increase_at_index(digits, last_index)
  end

  def increase_at_index(digits, -1) do
    new_digits = List.replace_at(digits, 0, 0)
    [1 | new_digits]
  end

  def increase_at_index(digits, index) do
    number = Enum.at(digits, index, nil)

    if (number === 9) do
        new_digits = List.replace_at(digits, index, 0)
        increase_at_index(new_digits, index - 1)
    else
        List.replace_at(digits, index, number + 1)
    end
  end
end
