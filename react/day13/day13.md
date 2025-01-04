redux-thunk가 해결하려고 했던 점을 무엇인가?

1. 서버에서 받아오는 데이터 시간이 소요 -> 얼마나 걸릴 것인지 모름
2. 사용자에게 어떻게 행동해야하는지 알려줘야함. </br>
   ex) 버튼의 로딩 </br>
   ex) 스켈레톤 UI </br>
   ex) 대기열 </br>
   ex) 프로그레스바 </br>
   ex) 에러 상황에 대한 처리 </br>
3. React에서는 서버에서 데이터를 불러오고 있다는 상태와 에러가 있다는 상태 => UI로 보여줘야하니까
4. 서버에서 데이터를 받아와서 상태를 관리하는 경우는 재사용되는 케이스가 굉장히 많다
   => 전역 상태 관리의 필요성

- 사용자 친화적인 화면을 만들기 위해 로딩과 에러 상태에 대한 인터페이스를 구현
- 서버에서 받아온 데이터는 전역으로 재사용되는 케이스가 많기 때문에 전역 상태 관리
- 로딩과 에러 상태도 전역 상태 관리가 되어야함
- 이 과정을 간편하게 구현 가능한 rtk thunk를 사용해라

---

React-query

서버에서 데이터를 받아옴 -> 캐싱(저장) -> key: value <br />
사용할 때는 이 캐싱된 값을 키로 가지고 오기만 하면 됨

리덕스를 사용한 이유는 전역 상태 관리 + 서버에서 받아오 데이터 관리

```
1. 서버에서 받아온 데이터의 상태 관리와 클라이언트에서 관리해야하는 전역 상태와 구분

2. 서버에서 받아온 데이터를 캐싱하여 불필요한 요청 감소

3. 상태 관리에 대한 편의성 (isLoading, pending, error), 서버 상태 관리를 대신
```

@tankstack query/applo client/swr + 전역상태 관리 도구 (redux, recoil, zustand, jotai)

### 사용 방법

```js
// get v4
    const {data, isLoading} = useQuery(['product'], () => axios.get())

// get v5
    const {data, isLoading} = useQuery({
        queryKey: ['product'], // 캐싱을 위한 값
        queryFn: () => axios.get() // 호출을 위해 필요한 값
        gcTime,
        staleTime,
    })

// post, update, delete
const {mutate, mutateAsync, isPending} = useMutation()
    mutationFn: (data) => axios.post(''.data),
    // side-effect
    onSuccess: () => {
        // 성공해서 추가적으로 할게 더 있으면
        // todo를 다시 재호출
    },
    onError: (error) => {},
    onMutate: () => {
        // 결과와 상관없이 요청을 보낸 즉시
        // 주로 낙관적 업데이트 사용
        qc.setQeury(['product'], (old) => {
            old.isLike = true
        })
        // 사용자의 편의성을 위해 성공했을거야 하고 먼저 상태 업데이트
    }
```
### staleTime, gcTime(cacheTime)

> staleTime 

이 데이터가 신선한 데이터인지 확인하는 시간, 만약 이 시간이 넘어가면 데이터를 다시 호출한다. 시간이 넘어가지 않았다면 신선한 데이터라 판단하고 재요청하지 않는다.

=> 불필요한 재요청을 막기 위한 시간 <br />
=> ms -> 0 ~ infinity

> gcTime (cacheTime)

데이터가 저장되는 시간, 메모리와 관련 있음, 이 시간이 넘어가면 데이터를 다시 호출하는 것이 아니라, 데이터가 조냊하지 않아 불러올 수 없는 ㅅ아태, staleTime이랑 헷갈릴 수 있는 이유는 캐싱된 데이터가 없으면 결국 데이터를 다시 호출하기 때문

=> 메모리에 캐시 데이터가 쌓이는 것을 방지하기 위한
=> 대부분 staleTime 보다 gcTime을 길게 가져감

staleTime, 데이터의 생명주기, 다음에 호출 시 데이터를 재호출 여부 <br/>
gcTime, 데이터가 메모리에 존재하는 시간, 캐시되어있는 값이 없다면 다음 호출 데이터를 재호출

``` invalidate query ``` // 게시판 


- staleTime이 존재하는 기간 동안은 재호출 하지 않는다 (페이지 이동, 컴포넌트 마운트 포함), 데이터를 불러올 것인지 안 불러올 것인지 여부
- gcTime은 해당 값이 inActive 되어있어도 캐싱되어있다면 값을 조회할 수 있는데, inActive(비활성화 -> 컴포넌트에서 useQuery를 호출하지 않은 상태) 상태에서 gcTime이 지나면 값을 조회할 수 없다


