defmodule Solution do
  @spec is_palindrome(x :: integer) :: boolean
  def is_palindrome(x) do
    cond do
        x < 0 -> false
        true -> digits = Integer.digits(x)
            digits == Enum.reverse(digits)
    end
  end
end
