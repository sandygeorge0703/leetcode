class Solution(object):

    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        if not nums:
            return 0

        write_index = 1

        for read_index in range(1, len(nums)):
            if nums[read_index] != nums[read_index - 1]:
                nums[write_index] = nums[read_index]
                write_index += 1
        return write_index

if __name__ == "__main__":
    s = Solution()
    nums = [1, 2, 2, 4, 6, 8]
    length = s.removeDuplicates(nums)

    # print(f"Length of array after removing duplicates: {length}")
    # print(f"Array after removing duplicates: {nums[:length]}")

