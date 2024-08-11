defmodule Solution do
  @spec plus_one(digits :: [integer]) :: [integer]
  def plus_one(digits) do
      last_index = length(digits) - 1
      increase_recursively(digits, last_index)
  end

  # has carry, but there is no more items at left
  def increase_recursively(digits, -1) do
      [1] ++ replace_with_zero_at(digits, 0)
  end

  def increase_recursively(digits, index) do
      number = Enum.at(digits, index, nil)

      if (number === 9) do
          replace_with_zero_at(digits, index)
          |> increase_recursively(index - 1)
      else
          List.replace_at(digits, index, number + 1)
      end
  end

  defp replace_with_zero_at(list, index), do: List.replace_at(list, index, 0)
end
