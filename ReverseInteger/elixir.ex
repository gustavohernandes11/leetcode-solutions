defmodule Solution do
  @max 2 ** 31 - 1
  @min -2 ** 31

  @spec reverse(x :: integer) :: integer
  def reverse(x) do
    x
    |> Integer.digits()
    |> Enum.reverse()
    |> Integer.undigits()
    |> check_range()
  end
  def check_range(x) when x > @max, do: 0
  def check_range(x) when x < @min, do: 0
  def check_range(x), do: x
end
