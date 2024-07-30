defmodule Solution do
  @spec is_palindrome(x :: integer) :: boolean
  def is_palindrome(x) when x < 0, do: false
  def is_palindrome(x) when x < 10, do: true
  def is_palindrome(x) do
        digits = Integer.digits(x)
        digits == Enum.reverse(digits)
  end
end
